import { Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { booking } from '@/features/booking/model/routes';
import {
  PlatformPayButton,
  PlatformPay,
  isPlatformPaySupported,
  confirmPlatformPayPayment,
} from '@stripe/stripe-react-native';

type PaymentServicesProps = {
  price: number
}

const PaymentServices = ({
  price
}: PaymentServicesProps) => {
  const [isApplePaySupported, setIsApplePaySupported] = useState(false);
  const [isGooglePaySupported, setIsGooglePaySupported] = useState(false);

  useEffect(() => {
    (async function () {
      setIsApplePaySupported(await isPlatformPaySupported());
    })();
  }, [isPlatformPaySupported]);
  useEffect(() => {
    (async function () {
      setIsGooglePaySupported(await isPlatformPaySupported({ googlePay: { testEnv: true } }));
    })();
  }, [isPlatformPaySupported]);

  const applePay = async () => {
    const clientSecret = await booking.createPaymentIntent()
    const { error } = await confirmPlatformPayPayment(
      clientSecret.data.clientSecret,
      {
        applePay: {
          cartItems: [
            {
              label: "Booking place",
              amount: price.toFixed(2),
              paymentType: PlatformPay.PaymentType.Immediate,
            },
          ],
          merchantCountryCode: 'US', // TODO need to change this
          currencyCode: 'USD',
          requiredShippingAddressFields: [
            PlatformPay.ContactField.PostalAddress,
          ],
          requiredBillingContactFields: [PlatformPay.ContactField.PhoneNumber],
        },
      }
    );
    if (error) {
      // handle error
    } else {
      alert('Success');
    }
  };

  const googlePay = async () => {
    const clientSecret = await booking.createPaymentIntent()

    const { error } = await confirmPlatformPayPayment(
      clientSecret.data.clientSecret,
      {
        googlePay: {
          testEnv: true,
          merchantName: 'My merchant name', // TODO need to change this lines
          merchantCountryCode: 'US',
          currencyCode: 'USD',
          billingAddressConfig: {
            format: PlatformPay.BillingAddressFormat.Full,
            isPhoneNumberRequired: true,
            isRequired: true,
          },
        },
      }
    );

    if (error) {
      alert(`${error.code} ${error.message}`);
      // Update UI to prompt user to retry payment (and possibly another payment method)
      return;
    }
    alert('Success, The payment was confirmed successfully.');
  };

  return (
    <>
      {Platform.OS == 'ios' && isApplePaySupported && (
        <PlatformPayButton
          onPress={applePay}
          type={PlatformPay.ButtonType.Book}
          appearance={PlatformPay.ButtonStyle.Black}
          borderRadius={4}
          style={{
            width: '100%',
            height: 50,
          }}
        />
      )}
      {Platform.OS == 'android' && isGooglePaySupported && (
        <PlatformPayButton
          onPress={googlePay}
          type={PlatformPay.ButtonType.Order}
          appearance={PlatformPay.ButtonStyle.Black}
          borderRadius={4}
          style={{
            width: '100%',
            height: 50,
          }}
        />
      )}
    </>
  )
}

export default PaymentServices