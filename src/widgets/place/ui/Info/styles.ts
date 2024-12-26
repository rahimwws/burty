import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   wrap: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 5,
   },
   card: {
      borderRadius: 100,
      overflow: "hidden",
   },
   cardInner: {
      backgroundColor: "rgba(0, 0, 0, 0.07)",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      padding: 5,
      paddingHorizontal: 10,
   },
   distance: {
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
   }
});

export default styles;