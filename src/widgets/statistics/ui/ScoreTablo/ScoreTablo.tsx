import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'
import Timer from '@/shared/ui/Timer'

type ScoreTabloProps = {
  teams?: {
    name: string
    score: number
  }[] | null
}

const ScoreTablo = ({
  teams
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
          {teams?.[0]?.name}
        </Typography>
        <Typography
          size={32}
          color='light'
          font='m'
        >
          {teams?.[0]?.score} : {teams?.[1]?.score}
        </Typography>
        <Typography
          align='left'
          color='gray'
        >
          {teams?.[1]?.name}
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