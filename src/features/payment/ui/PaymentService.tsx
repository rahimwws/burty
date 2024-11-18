import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import PaymentSvg from "@/shared/assets/icons/interface/PaymentSvg";
import Calendar from "@/shared/assets/icons/interface/Calendar";
import Protect from "@/shared/assets/icons/interface/Protect";

const PaymentService = () => {
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
        style={{
          width: "100%",
          height: 55,
          borderWidth: 1,
          borderColor: colors.dark,
          borderRadius: 10,
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 10,
        }}
      >
        <PaymentSvg size={20} fill={colors.light} />
        <TextInput
          value={cardNumber}
          onChangeText={(text) => setCardNumber(formatCardNumber(text))}
          keyboardType="numeric"
          placeholder="Card Number"
          maxLength={19} // 16 digits + 3 spaces
          placeholderTextColor={colors.gray}
          style={{
            width: "70%",
            paddingHorizontal: 10,
            fontSize: 16,
            fontFamily: "b",
            color: colors.light,
          }}
          returnKeyType="done"
        />
      </View>

      {/* Expiry Date and CVV */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: "2%",
          width: "100%",
        }}
      >
        {/* Expiry Date Input (MM/YY) */}
        <View
          style={{
            width: "49%",
            height: 55,
            borderWidth: 1,
            borderColor: colors.dark,
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 10,
          }}
        >
          <Calendar size={20} fill={colors.light} />
          <TextInput
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(formatExpiryDate(text))}
            keyboardType="numeric"
            placeholder="MM/YY"
            maxLength={5} // MM/YY format
            placeholderTextColor={colors.gray}
            style={{
              width: "70%",
              paddingHorizontal: 10,
              fontSize: 16,
              fontFamily: "b",
              color: colors.light,
            }}
            returnKeyType="done"
          />
        </View>

        {/* CVV Input (3 digits) */}
        <View
          style={{
            width: "49%",
            height: 55,
            borderWidth: 1,
            borderColor: colors.dark,
            borderRadius: 10,
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 10,
          }}
        >
          <Protect size={20} fill={colors.light} />
          <TextInput
            value={cvv}
            onChangeText={(text) => setCvv(text.replace(/\D/g, ""))} // Remove non-numeric characters
            keyboardType="numeric"
            placeholder="CVV"
            maxLength={3} // CVV is typically 3 digits
            placeholderTextColor={colors.gray}
            style={{
              width: "70%",
              paddingHorizontal: 10,
              fontSize: 16,
              fontFamily: "b",
              color: colors.light,
            }}
            returnKeyType="done"
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentService;
