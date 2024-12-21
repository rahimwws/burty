import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Typography from '../Typography'
import styles from './styles'
import { colors } from '@/shared/lib/theme'

type AuthTitleProps = {
  title: string
}

const AuthTitle = (props: AuthTitleProps) => {
  const { title } = props;

  return (
    <View style={styles.wrap}>
      <View style={styles.title}>
        <Typography font="b" size={22}>
          {title}
        </Typography>

        <LinearGradient
          colors={["rgba(0, 0, 0, 0.1)", colors.primary + "50"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 25,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </View>
    </View>
  )
}

export default AuthTitle