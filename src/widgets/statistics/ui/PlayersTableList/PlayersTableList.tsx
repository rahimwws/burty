import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import Typography from '@/shared/ui/Typography'
import ModalSelectGoalkeeper from '../ModalSelectGoalkeeper'

type PlayersTableListProps = {
  teams?: {
    name: string
    players: {
      name: string
    }[]
  }[] | null
}

const PlayersTableList = ({
  teams,
}: PlayersTableListProps) => {
  const [showSelectGoalKeeper, setShowSelectGoalKeeper] = useState(false);

  return (
    <>
      <View style={[
        styles.row,
        styles.wfull,
        { gap: 15 }
      ]}>
        {
          teams?.map((team, index) => {
            return (
              <View key={index} style={[
                styles.col,
                styles.flex1,
                { gap: 12 }
              ]}>
                <Typography
                  color='gray'
                >
                  {team.name}
                </Typography>
                {
                  team.players.map((player, index) => {
                    return (
                      <Typography
                        key={index}
                        color='light'
                        align='left'
                        font='b'
                        size={16}
                      >
                        {player.name}
                      </Typography>
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>
      <ModalSelectGoalkeeper
        setVisible={setShowSelectGoalKeeper}
        visible={showSelectGoalKeeper}
      />
    </>
  )
}

export default PlayersTableList