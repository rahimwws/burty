import { View } from 'react-native'
import React from 'react'
import Typography from '../Typography'
import styles from './styles'
import { colors } from '@/shared/lib/theme'
import BottomLinearGradient from '../BottomLinearGradient'

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

        <BottomLinearGradient
          colors={["rgba(0, 0, 0, 0.1)", colors.primary + "50"]}
          height={25}
        />
      </View>
    </View>
  )
}

export default AuthTitle