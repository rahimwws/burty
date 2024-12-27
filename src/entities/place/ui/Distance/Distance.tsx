import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import Marker from '@/shared/assets/icons/interface/Marker'
import { colors } from '@/shared/lib/theme'
import Typography from '@/shared/ui/Typography'

type DistanceProps = {
   /** @default false */
   isUsed?: boolean
   distance: number
}

const Distance = ({
   isUsed = false,
   distance
}: DistanceProps) => {

   return (
      <View
         style={styles.distance}
      >
         <Marker
            size={15}
            fill={isUsed ? "#A0A0A0" : colors.light + "fffCC"}
         />
         <Typography
            size={15}
            styles={{ color: isUsed ? "#A0A0A0" : colors.light + "fffCC" }}
         >
            {distance} m
         </Typography>
      </View>
   )
}

export default Distance