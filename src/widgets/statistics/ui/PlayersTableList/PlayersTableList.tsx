import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'
import { LargeButton } from '@/shared/ui/Button'
import { colors } from '@/shared/lib/theme'
import ModalSelectGoalkeeper from '../ModalSelectGoalkeeper'

type PlayersTableListProps = {
  isGameStarted: boolean
}

const PlayersTableList = ({
  isGameStarted
}: PlayersTableListProps) => {
  const [showSelectGoalKeeper, setShowSelectGoalKeeper] = useState(false);

  return (
    <>
      <View style={[
        styles.row,
        styles.wfull,
        { gap: 15 }
      ]}>
        <View style={[
          styles.col,
          styles.flex1,
          { gap: 12 }
        ]}>
          {
           !isGameStarted &&
            <>
              <Typography
                color='gray'
              >
                Team 1
              </Typography>
              {
                new Array(12).fill(0).map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      color='light'
                      align='left'
                      font='b'
                      size={16}
                    >
                      {index + 1}. Player
                    </Typography>
                  )
                })
              }
            </>
          }
          <Typography
            color='gray'
          >
            Team 1
          </Typography>
          <LargeButton
            text="Goalkeeper “5”"
            bg={colors.blue}
            textColor="light"
            type="rounded"
            theme="outline"
            action={() => setShowSelectGoalKeeper(true)}
          />
        </View>
        <View style={[
          styles.col,
          styles.flex1,
          { gap: 12 }
        ]}>
          {
            !isGameStarted &&
            <>
              <Typography
                color='gray'
              >
                Team 2
              </Typography>
              {
                new Array(12).fill(0).map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      color='light'
                      align='left'
                      font='b'
                      size={16}
                    >
                      {index + 1}. Player
                    </Typography>
                  )
                })
              }
            </>
          }
          <Typography
            color='gray'
          >
            Team 2
          </Typography>
          <LargeButton
            text="Select goalkeeper"
            bg={colors.blue}
            textColor="light"
            type="rounded"
            action={() => setShowSelectGoalKeeper(true)}
          />
        </View>
      </View>
      <ModalSelectGoalkeeper
        setVisible={setShowSelectGoalKeeper}
        visible={showSelectGoalKeeper}
      />
    </>
  )
}

export default PlayersTableList