import { View } from 'react-native'
import React, { ReactNode } from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'

type PlaceNameProps = {
  children: ReactNode
}

const PlaceName = ({
  children
}: PlaceNameProps) => {

  return (
    <View style={styles.card}>
      <Typography font='b' size={14}>
        {children}
      </Typography>
    </View>
  )
}

export default PlaceName