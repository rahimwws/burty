import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   card: {
      borderRadius: 15,
   },
   timeWrap: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: "absolute",
      top: "5%",
      left: "5%",
      gap: 5
   },
   content: {
      position: "absolute",
      bottom: "3%",
      left: "5%",
      width: "90%",
      zIndex: 1,
   },
   contentInner: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: "3%",
   },
   justifyBetween: {
      justifyContent: 'space-between'
   },
   justifyEnd: {
      justifyContent: 'flex-end'
   },
});

export default styles;