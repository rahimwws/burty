import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    width: "100%",
  },
  input: {
    textAlignVertical: 'top',
    backgroundColor: colors.dark,
    fontSize: 18,
    padding: 10,
    borderRadius: 8,
    color: colors.light,
    fontFamily: "m",
    borderWidth: 1,
    borderColor: colors.gray,
    width: "100%",
    height: "60%",
    marginVertical: "5%",
  }
});

export default styles;