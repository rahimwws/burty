import { colors } from '@/shared/lib/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    gap: 5,
  },
  row: {
    flexDirection: 'row',
  },
  tRow: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  tRowBg: {
    backgroundColor: colors.dark,
    borderRadius: 100,
  },
  tCell50: {
width:'50%'
  },
  tCell: {
    width: '25%'
  }
});

export default styles;