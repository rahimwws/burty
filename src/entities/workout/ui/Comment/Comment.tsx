import { View } from 'react-native'
import React from 'react'
import Typography from '@/shared/ui/Typography';
import styles from './styles';

type CommentProps = {
  comment: string
  time: string
}

const Comment = ({
  comment,
  time
}: CommentProps) => {
  return (
    <View
      style={styles.card}
    >
      <Typography>{comment}</Typography>
      <Typography>{time}</Typography>
    </View>
  );
};

export default Comment