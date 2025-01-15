import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import PaymentSvg from "@/shared/assets/icons/interface/PaymentSvg";
import Calendar from "@/shared/assets/icons/interface/Calendar";
import Protect from "@/shared/assets/icons/interface/Protect";
import styles from "./styles";

const PaymentServiceInputs = () => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  // Function to format Visa card number (1234 5678 9012 3456)
  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, ""); // Remove non-numeric characters
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned; // Split into groups of 4
    return formatted;
  };

  // Function to format date input as MM/YY
  const formatExpiryDate = (text: string) => {
    const cleaned = text.replace(/\D/g, ""); // Remove non-numeric characters
    if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`; // Format as MM/YY
    }
    return cleaned;
  };

  return (
    <View style={{ marginVertical: "3%" }}>
      {/* Payments details Header */}
      <Typography
        styles={{ marginBottom: "1%" }}
        align="left"
        size={18}
        font="b"
      >
        Payments details
      </Typography>

      {/* Card Number Input (Visa Format) */}
      <View
        style={[
          { width: "100%" },
          styles.inputWrap
        ]}
      >
        <PaymentSvg size={20} fill={colors.light} />
        <TextInput
          value={cardNumber}
          onChangeText={(text) => setCardNumber(formatCardNumber(text))}
          keyboardType="numeric"
          placeholder="Card Number"
          maxLength={19} // 16 digits + 3 spaces
          placeholderTextColor={colors.gray}
          style={[
            { width: "70%", },
            styles.input
          ]}
          returnKeyType="done"
        />
      </View>

      {/* Expiry Date and CVV */}
      <View
        style={[
          { width: "100%", },
          styles.row
        ]}
      >
        {/* Expiry Date Input (MM/YY) */}
        <View
          style={[
            { width: "49%", },
            styles.inputWrap
          ]}
        >
          <Calendar size={20} fill={colors.light} />
          <TextInput
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(formatExpiryDate(text))}
            keyboardType="numeric"
            placeholder="MM/YY"
            maxLength={5} // MM/YY format
            placeholderTextColor={colors.gray}
            style={[
              { width: "70%", },
              styles.input
            ]}
            returnKeyType="done"
          />
        </View>

        {/* CVV Input (3 digits) */}
        <View
          style={[
            {  width: "49%", },
            styles.inputWrap
          ]}
        >
          <Protect size={20} fill={colors.light} />
          <TextInput
            value={cvv}
            onChangeText={(text) => setCvv(text.replace(/\D/g, ""))} // Remove non-numeric characters
            keyboardType="numeric"
            placeholder="CVV"
            maxLength={3} // CVV is typically 3 digits
            placeholderTextColor={colors.gray}
            style={[
              {     width: "70%", },
              styles.input
            ]}
            returnKeyType="done"
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentServiceInputs;
