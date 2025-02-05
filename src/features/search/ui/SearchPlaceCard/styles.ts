import { colors } from "@/shared/lib/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: `${colors.dark}`,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column',
    gap: 4,
    marginLeft: 10,
  },
  distance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;