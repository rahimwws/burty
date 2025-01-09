import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'
import Time from '@/shared/assets/icons/interface/Time'
import { colors } from '@/shared/lib/theme'

type ScoreTabloProps = {
}

const ScoreTablo = ({

}: ScoreTabloProps) => {
  return (
    <View style={[
      styles.col,
      {gap: 10}
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
          styles.itemsCenter,
          styles.justifyCenter,
        ]}
      >
        <Time fill={colors.light} size={16} />
        <Typography
          color='light'
          size={18}
          styles={{ marginLeft: 10 }}
        >
          00:05
        </Typography>
      </View>
    </View>
  )
}

export default ScoreTablo