import { View } from 'react-native'
import React from 'react'
import { colors } from '@/shared/lib/theme'
import styles from './styles'
import Calendar from '@/shared/assets/icons/interface/Calendar'
import Typography from '@/shared/ui/Typography'
import Time from '@/shared/assets/icons/interface/Time'

type TimeBadgeProps = {
   /** @default "date" */
   type?: "date" | "time"
   time: string
}

const TimeBadge = ({
   type = "date",
   time
}: TimeBadgeProps) => {
   return (
      <View
         style={styles.time}
      >
         {
            type == 'date' ?
               <Calendar fill={colors.light} size={14} />
               :
               <Time fill={colors.light} size={14} />
         }
         <Typography styles={{ color: colors.light }}>
            {time}
         </Typography>
      </View>
   )
}

export default TimeBadge