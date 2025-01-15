import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputWrap: {
    height: 55,
    borderWidth: 1,
    borderColor: colors.dark,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "b",
    color: colors.light,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "2%",
  }
});

export default styles;