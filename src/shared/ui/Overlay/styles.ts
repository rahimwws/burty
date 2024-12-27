import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(100, 100, 100, 0.8)",
      borderRadius: 15,
      zIndex: 1
   },
});

export default styles;