import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

type BottomLinearGradientProps = {
   /** @default 50 */
   height?: number
   /** @default ["rgba(0, 0, 0, 0.2)", "#020202"] */
   colors?: string[]
}

const BottomLinearGradient = ({
   height = 50,
   colors = ["rgba(0, 0, 0, 0.2)", "#020202"]
}: BottomLinearGradientProps) => {
   return (
      <LinearGradient
         colors={colors}
         style={[
            styles.bottomGradient,
            { height, }
         ]}
         start={{ x: 0.5, y: 0 }}
         end={{ x: 0.5, y: 1 }}
      />
   )
}

export default BottomLinearGradient