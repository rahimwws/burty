import { View } from 'react-native'
import React, { useMemo } from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'

type ScoreStatisticsProps = {
  name: string
  team1: {
    name: string
    score: number
  }
  team2: {
    name: string
    score: number
  }
}

const ScoreStatistics = ({
  team1,
  team2,
  name
}: ScoreStatisticsProps) => {

  const fillPercents = useMemo(() => {
    const res = {
      team1: {
        fillPercent: "0%" as `${number}%`,
        isGreater: false
      },
      team2: {
        fillPercent: "0%" as `${number}%`,
        isGreater: false
      }
    }
    if (team1.score > team2.score) {
      res.team1.fillPercent = "100%" as `${number}%`;
      res.team1.isGreater = true;
      res.team2.fillPercent = (team2.score / team1.score * 100) + "%" as `${number}%`;
      res.team2.isGreater = false;
      return res;
    } else if (team1.score == team2.score) {
      res.team1.fillPercent = "100%" as `${number}%`;
      res.team1.isGreater = true;
      res.team2.fillPercent = "100%" as `${number}%`;
      res.team2.isGreater = true;
      return res;
    } else {
      res.team1.fillPercent = (team1.score / team2.score * 100) + "%" as `${number}%`;
      res.team1.isGreater = false;
      res.team2.fillPercent = "100%" as `${number}%`;
      res.team2.isGreater = true;
      return res;
    }
  }, [team1.score, team2.score]);

  return (
    <View style={styles.wrap}>
      <View style={[
        styles.row,
        styles.itemsCenter,
        styles.justifyBetween
      ]}>
        <Typography color='border' align='left'>
          {team1.name}
        </Typography>
        <Typography color='light' font='b'>
          {name}: {team1.score} - {team2.score}
        </Typography>
        <Typography color='border' align='right'>
          {team2.name}
        </Typography>
      </View>
      <View style={[
        styles.row,
        styles.itemsCenter,
        styles.justifyCenter,
      ]}>
        <View style={[
          styles.row,
          styles.justifyEnd,
          { width: '50%' }
        ]}>
          <View style={[
            styles.line,
            fillPercents.team1.isGreater ?
              styles.linePrimary : styles.lineLight,
            { width: fillPercents.team1.fillPercent, },
          ]} />
        </View>
        <View style={[
          styles.row,
          styles.justifyStart,
          { width: '50%' }
        ]}>
          <View style={[
            styles.line,
            fillPercents.team2.isGreater ?
              styles.linePrimary : styles.lineLight,
            { width: fillPercents.team2.fillPercent, },
          ]} />
        </View>
      </View>
    </View>
  )
}

export default ScoreStatistics