import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'
import Timer from '@/shared/ui/Timer'

type ScoreTabloProps = {
}

const ScoreTablo = ({

}: ScoreTabloProps) => {
  return (
    <View style={[
      styles.col,
      { gap: 10 }
    ]}>
      <View style={[
        styles.row,
        styles.justifyBetween,
        styles.itemsCenter
      ]}>
        <Typography
          align='left'
          color='gray'
        >
          Team 1
        </Typography>
        <Typography
          size={32}
          color='light'
          font='m'
        >
          0 : 0
        </Typography>
        <Typography
          align='left'
          color='gray'
        >
          Team 2
        </Typography>
      </View>
      <View
        style={[
          styles.row,
          styles.justifyCenter,
        ]}
      >
        <Timer />
      </View>
    </View>
  )
}

export default ScoreTablo