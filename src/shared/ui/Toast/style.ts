import { StyleSheet } from "react-native";
import { ToastTypes } from "./Toast";
import { colors } from "@/shared/lib/theme";

export const styles = StyleSheet.create({
   toastContainer: {
      flex: 1,
      position: 'absolute',
      zIndex: 1000,
      width: '100%',
      paddingVertical: '2%'
   },
   titleCard: {}
});


export const getStyles = (type: ToastTypes) => {
   switch (type) {
      case "error":
         return { backgroundColor: colors.error }
      case "info":
         return { backgroundColor: colors.blue }
      default:
         return { backgroundColor: colors.primary }
   }
}
