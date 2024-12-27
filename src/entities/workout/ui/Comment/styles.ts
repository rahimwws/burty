import { colors } from '@/shared/lib/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.dark,
    justifyContent: "space-between",
    borderRadius: 5,
    marginVertical: 5,
  }
});

export default styles;