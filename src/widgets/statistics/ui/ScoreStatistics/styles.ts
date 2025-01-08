import { colors } from '@/shared/lib/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    flexDirection: 'column',
    gap: 9
  },
  row: {
    flexDirection: 'row',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  line: {
    position: 'absolute',
    height: 5,
  },
  lineLight: {
    backgroundColor: colors.light,
  },
  linePrimary: {
    backgroundColor: colors.primary
  }
});

export default styles;