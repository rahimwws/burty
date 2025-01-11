import { TouchableOpacity, View, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction, useState, } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import styles from "./styles";
import { colors } from "@/shared/lib/theme";
import Cross from "@/shared/assets/icons/interface/Cross";
import { CheckboxWithText } from "@/shared/ui/CheckBox/CheckBoxWithText";

const players = [
  { id: 1, name: "Player 1" },
  { id: 2, name: "Player 2" },
  { id: 3, name: "Player 3" },
  { id: 4, name: "Player 4" },
  { id: 5, name: "Player 5" },
  { id: 6, name: "Player 6" },
  { id: 7, name: "Player 7" },
  { id: 8, name: "Player 8" },
  { id: 9, name: "Player 9" },
  { id: 10, name: "Player 10" },
  { id: 11, name: "Player 11" },
]

type ModalSelectPlayerProps = {
  visible: boolean
  onClose?: () => void
  onPressMarkAsOwnGoal?: () => void
  onPressGoalPass?: () => void
}

const ModalSelectPlayer = ({
  visible = false,
  onClose,
  onPressMarkAsOwnGoal,
  onPressGoalPass
}: ModalSelectPlayerProps) => {
  const [player, setPlayer] = useState<number | null>(null);
  const [isOwnGoal, setIsOwnGoal] = useState(false);
  const [isGoalAssisted, setIsGoalAssisted] = useState(false);

  return (
    <Modal
      visible={visible}
      custom={[
        styles.modal,
      ]}
    >
      <View style={[
        styles.wfull,
        styles.row,
        styles.justifyEnd,
      ]}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => onClose?.()}
        >
          <Cross fill={colors.light} size={10} />
        </TouchableOpacity>
      </View>
      <Typography size={22} font="black" styles={{ marginBottom: '3%' }}>
        Select Player
      </Typography>
      <ScrollView
        style={{ maxHeight: '85%', width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        {
          players.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{ marginBottom: 10 }}
              >
                <DarkButton
                  isRoute={false}
                  text={item.name}
                  disabled={item.id !== player}
                  action={() => setPlayer(item.id)}
                />
              </View>
            )
          })
        }
      </ScrollView>
      {
        !!onPressMarkAsOwnGoal && !!onPressGoalPass &&
        <View style={[
          styles.row,
          styles.justifyCenter,
          { gap: 10 }
        ]}>
          {
            !!onPressMarkAsOwnGoal &&
            <CheckboxWithText
              onValueChange={() => {
                setIsOwnGoal(prev => !prev)
                onPressMarkAsOwnGoal?.()
              }}
              text="Mark as own goal"
              value={isOwnGoal}
            />
          }
          {
            !!onPressGoalPass &&
            <CheckboxWithText
              onValueChange={() => {
                setIsGoalAssisted(prev => !prev)
                onPressGoalPass?.()
              }}
              text="There was a goal pass"
              value={isGoalAssisted}
            />
          }
        </View>
      }
      <View style={[
        styles.row,
        { gap: 10 }
      ]}>
        <View style={{ width: '35%' }}>
          <LargeButton
            text="Cancel"
            action={() => onClose?.()}
            bg={colors.input}
            textColor="light"
          />
        </View>
        <View style={{ width: '65%' }}>
          <LargeButton
            text="Cofirm"
            action={() => onClose?.()}
            bg={colors.blue}
            textColor="light"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelectPlayer;
