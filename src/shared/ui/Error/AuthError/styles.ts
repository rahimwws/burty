import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   error: {
      width: "100%",
      backgroundColor: colors.error + "4F",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 5,
      paddingHorizontal: '4%',
   },
});

export default styles;