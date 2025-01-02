import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      borderWidth: 1,
      borderColor: colors.dark,
      paddingVertical: 10,
      width: "100%",
      paddingLeft: 10,
      borderEndEndRadius: 10,
      borderEndStartRadius: 10,
   },
});

export default styles;