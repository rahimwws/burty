import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   otp: {
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.gray,
      height: 105,
      color: colors.light,
      alignItems: "center",
      justifyContent: "center",
   },
   otpFont: {
      fontSize: 32,
      fontWeight: "bold",
      color: colors.light,
      fontFamily: "m",
   }
})

export default styles;