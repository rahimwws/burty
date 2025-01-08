import { View, Text } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import styles from './styles'
import Star from '@/shared/assets/icons/interface/Star'
import Typography from '@/shared/ui/Typography'
import { colors } from '@/shared/lib/theme'

type RatingBadgeProps = {
   rating: number
   isUsed: boolean
   /** @default false */
   isStatisticsList?: boolean
}

const RatingBadge = ({
   isUsed,
   rating,
   isStatisticsList = false
}: RatingBadgeProps) => {

   return (
      <View
         style={styles.rating}
      >
         <BlurView
            intensity={30}
            tint="light"
            style={styles.ratingInner}
         >
            {
               !isStatisticsList &&
               <Star size={15} fill={isUsed ? "#A0A0A0" : colors.primary} />
            }
            <Typography styles={{ color: isUsed ? "#A0A0A0" : colors.light }}>
               {Number(rating?.toFixed(1))}
            </Typography>
            {
               isStatisticsList &&
               <Star size={15} fill={isUsed ? "#A0A0A0" : colors.primary} />
            }
         </BlurView>
      </View>
   )
}

export default RatingBadge