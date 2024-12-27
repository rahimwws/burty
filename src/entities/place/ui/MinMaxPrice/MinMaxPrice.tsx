import React from 'react'
import Typography from '@/shared/ui/Typography'
import { colors } from '@/shared/lib/theme'

type MinMaxPriceProps = {
   isUsed: boolean
   minPrice: number
   maxPrice: number
}

const MinMaxPrice = ({
   isUsed,
   minPrice,
   maxPrice
}: MinMaxPriceProps) => {
   return (
      <Typography
         font="b"
         styles={{ color: isUsed ? "#A0A0A0" : colors.light }}
      >
         ${minPrice}-{maxPrice}
      </Typography>
   )
}

export default MinMaxPrice