import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   rating: {
      position: "absolute",
      top: "5%",
      right: "5%",
      borderRadius: 100,
      overflow: "hidden",
   },
   ratingInner: {
      backgroundColor: "rgba(0, 0, 0, 0.07)",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      padding: 5,
      paddingHorizontal: 10,
      gap: 5,
   },
});

export default styles;
