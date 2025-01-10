import { colors } from '@/shared/lib/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   modal: {
      width: "100%",
      height: "auto"
   },
   row: {
      flexDirection: "row"
   },
   justifyEnd: {
      justifyContent: 'flex-end'
   },
   wfull: {
      width: "100%",
   },
   closeBtn: {
      padding: 8,
      borderRadius: 6,
      backgroundColor: colors.background,
   }
});

export default styles;