import { colors } from '@/shared/lib/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2%'
  },
  title: {
    paddingBottom: "1.5%",
    paddingHorizontal: '7%',
    borderBottomWidth: 2,
    borderColor: colors.primary
  }
});

export default styles;