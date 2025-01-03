import { View } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import StepIndicator from "@/components/pagination/StepIndicator";
import { PaymentService } from "@/features/payment";
import Typography from "@/shared/ui/Typography";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import Modal from "@/shared/ui/Modal";
import { useAppNavigation } from "@/shared/lib/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";

type RouteParams = {
  MyScreen: {
    bookingId: string
    price: string | number
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;

const BookBuy = () => {
  const { params: { price, bookingId } } = useRoute<MyScreenRouteProp>();
  const navigation = useAppNavigation();
  const [status, setStatus] = useState<"error" | "success" | null>();
console.log(bookingId, price)
  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <Header title="Book workout" type="stack" />
        <StepIndicator currentStep={1} steps={2} />
        <PaymentService />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "3%",
          }}
        >
          <Typography align="left" size={18} font="b">
            Total
          </Typography>
          <Typography align="right" size={22} font="black">
            ${price}
          </Typography>
        </View>
        <LargeButton
          text="Pay"
          isRoute={false}
          route="BookTime"
          type="rounded"
          bg={colors.blue}
          textColor="light"
          action={() => setStatus("error")}
        />
      </View>
      <Modal
        title="Payment failed!"
        description="Unfortunately, your payment could not be processed. Please check your payment details or try a different payment method."
        rightText="Try again"
        visible={status === "error"}
        rightAction={() => setStatus(null)}
        leftAction={() => navigation.goBack()}
        leftText="Back"
      />
    </ScreenLayout>
  );
};

export default BookBuy;
