import { colors } from '@/shared/lib/theme';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  wrap: {
    marginVertical: "3%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 45,
  },
  bgDark: {
    backgroundColor: colors.dark
  },
  editBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;