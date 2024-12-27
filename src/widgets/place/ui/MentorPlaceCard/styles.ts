import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    bottom: "3%",
    left: "5%",
    width: "90%",
    zIndex: 1,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "3%",
  },
  playerCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  }
});

export default styles;
