import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Typography from '@/shared/ui/Typography'
import styles from './styles'
import { RatingBadge, TimeBadge } from '@/entities/place/ui'
import { LightHeptic } from '@/shared/lib/heptics'
import { useAppNavigation } from '@/shared/lib/navigation'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ArrowLeft from "@/shared/assets/icons/interface/ArrowLeft";

import Share from "@/shared/assets/icons/interface/Share";
import onShare from "@/shared/lib/utils/onShare";
import { colors } from '@/shared/lib/theme'

type StatisticsHeaderProps = {
  startDate: string
  startTime: string
  personalScore: number
  shareLink: string
}

const StatisticsHeader = ({
  startTime,
  startDate,
  personalScore,
  shareLink,
}: StatisticsHeaderProps) => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.wrap,
      { marginTop: insets.top }
    ]}>
      <View style={[
        styles.col,
      ]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            LightHeptic();
            navigation.goBack();
          }}
        >
          <ArrowLeft size={20} fill={colors.light} />
        </TouchableOpacity>
        <View
          style={[
            styles.col,
            styles.itemsStart,
            { gap: 4 }
          ]}
        >
          <TimeBadge type="time" time={startTime} />
          <TimeBadge type="date" time={startDate} />
        </View>
      </View>
      <View style={[
        styles.col,
        styles.itemsEnd
      ]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            LightHeptic();
            onShare(shareLink)
          }}
        >
          <Share size={20} fill={colors.light} />
        </TouchableOpacity>
        <View style={[
          styles.row,
          styles.itemsCenter,
        ]}>
          <Typography size={16} font="m" styles={{ marginRight: 10, }}>
            Personal score
          </Typography>
          <RatingBadge
            isUsed={false}
            rating={personalScore}
            isStatisticsList
          />
        </View>
      </View>
    </View>
  )
}

export default StatisticsHeader