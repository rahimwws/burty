import { View } from 'react-native'
import React from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'

type PersonalDetailsProps = {
  items: {
    type: string
    score: string | number
    timing: string
  }[]
}

const PersonalDetails = ({
  items
}: PersonalDetailsProps) => {
  return (
    <View style={styles.wrap}>
      <Typography font='b' size={16} align='left'>
        Personal details
      </Typography>
      <View style={[
        styles.row,
        styles.tRow
      ]}>
        <View style={styles.tCell50}>
          <Typography font='b' color='border' align='left'>
            Type
          </Typography>
        </View>
        <View style={styles.tCell}>
          <Typography font='b' color='border' align='left'>
            Score
          </Typography>
        </View>
        <View style={styles.tCell}>
          <Typography font='b' color='border' align='left'>
            Timing
          </Typography>
        </View>
      </View>
      {
        items.map((item, i) => {
          return (
            <View key={i} style={[
              styles.row,
              styles.tRow,
              styles.tRowBg,
            ]}>
              <View style={styles.tCell50}>
                <Typography font='b' color='border' align='left'>
                  {item.type}
                </Typography>
              </View>
              <View style={styles.tCell}>
                <Typography font='b' color='border' align='left'>
                  {item.score}
                </Typography>
              </View>
              <View style={styles.tCell}>
                <Typography font='b' color='border' align='left'>
                  {item.timing}
                </Typography>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default PersonalDetails