import { TouchableOpacity, View, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction, useState, } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import styles from "./styles";
import { colors } from "@/shared/lib/theme";
import Cross from "@/shared/assets/icons/interface/Cross";

const players = [
  {id: 1, name: "Player 1"},
  {id: 2, name: "Player 2"},
  {id: 3, name: "Player 3"},
  {id: 4, name: "Player 4"},
  {id: 5, name: "Player 5"},
  {id: 6, name: "Player 6"},
  {id: 7, name: "Player 7"},
  {id: 8, name: "Player 8"},
  {id: 9, name: "Player 9"},
  {id: 10, name: "Player 10"},
  {id: 11, name: "Player 11"},
]

const ModalSelectGoalkeeper = ({
  visible = false,
  setVisible,
}: {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
}) => {
  const [player, setPlayer] = useState<number | null>(null);

  return (
    <Modal
      visible={visible}
      custom={[
        styles.modal,
        { height: "auto" }
      ]}
    >
      <View style={[
        styles.wfull,
        styles.row,
        styles.justifyEnd,
        { marginTop: '10%' }
      ]}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => setVisible(false)}
        >
          <Cross fill={colors.light} size={10} />
        </TouchableOpacity>
      </View>
      <Typography size={22} font="black" styles={{ marginBottom: '3%' }}>
        Select Goalkeeper
      </Typography>
      <ScrollView
        contentContainerStyle={{ paddingVertical: '5%' }}
        style={{ width: '100%' }}
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
                  text={`Player ${index + 1}`}
                  disabled={item.id !== player}
                  action={() => setPlayer(item.id)}
                />
              </View>
            )
          })
        }
      </ScrollView>
      <View style={[
        styles.row,
        { gap: 10, marginBottom: '10%' }
      ]}>
        <View style={{ width: '35%' }}>
          <LargeButton
            text="Cancel"
            action={() => setVisible(false)}
            bg={colors.input}
            textColor="light"
          />
        </View>
        <View style={{ width: '65%' }}>
          <LargeButton
            text="Cofirm"
            action={() => setVisible(false)}
            bg={colors.blue}
            textColor="light"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelectGoalkeeper;
