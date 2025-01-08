import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    zIndex: 1,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    left: 0,
    paddingHorizontal: 20,
    gap: 9
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  itemsStart: {
    alignItems: 'flex-start'
  },
  itemsCenter: {
    alignItems: 'center',
  },
  itemsEnd: {
    alignItems: 'flex-end'
  },
  col: {
    flexDirection: 'column',
    gap: 9
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#000000BD",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;