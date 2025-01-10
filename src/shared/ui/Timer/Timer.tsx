import { View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles'
import Time from '@/shared/assets/icons/interface/Time'
import { colors } from '@/shared/lib/theme'
import Typography from '../Typography'
import dayjs from 'dayjs'

const Timer = () => {
   const startTime = useMemo(() => dayjs(), []);
   const [time, setTime] = useState<string>("00:00");

   useEffect(() => {
      const interval = setInterval(() => {
         const now = dayjs();
         const diffInSeconds = now.diff(startTime, 'second');
         const minutes = Math.floor(diffInSeconds / 60);
         const seconds = diffInSeconds % 60;

         setTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   return (
      <View style={styles.card}>
         <Time fill={colors.light} size={16} />
         <Typography
            color="light"
            size={18}
            styles={{ marginLeft: 10 }}
         >
            {time}
         </Typography>
      </View>
   )
}

export default Timer