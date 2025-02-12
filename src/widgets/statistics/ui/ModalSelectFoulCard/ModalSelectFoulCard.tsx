import { TouchableOpacity, View, ScrollView } from "react-native";
import React, { useState, } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import styles from "./styles";
import { colors } from "@/shared/lib/theme";
import Cross from "@/shared/assets/icons/interface/Cross";
import { MatchAction } from "@/features/statistics";

const foulCards = [
   { name: "Yellow", action: "YELLOW_CARD", color: "#D8C141", colorDisabled: '#D8C1411A' } as const,
   { name: "Red", action: "RED_CARD", color: "#D84641", colorDisabled: '#D846411A' } as const,
]

type ModalSelectFoulCardProps = {
   visible: boolean
   onClose?: Function
   onConfirmCardSelection?: (action: MatchAction) => void
}

const ModalSelectFoulCard = ({
   visible = false,
   onClose,
   onConfirmCardSelection,
}: ModalSelectFoulCardProps) => {
   const [foulCard, setFoulCard] = useState<MatchAction>("YELLOW_CARD");

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
               onPress={() => onClose?.(foulCard)}
            >
               <Cross fill={colors.light} size={10} />
            </TouchableOpacity>
         </View>
         <Typography size={22} font="black" styles={{ marginBottom: '3%' }}>
            Card type
         </Typography>
         <ScrollView
            style={{ maxHeight: '85%', width: '100%' }}
            showsVerticalScrollIndicator={false}
         >
            {
               foulCards.map((item, index) => {
                  return (
                     <View
                        key={item.action}
                        style={{ marginBottom: 10 }}
                     >
                        <DarkButton
                           isRoute={false}
                           text={item.name}
                           disabled={item.action !== foulCard}
                           action={() => setFoulCard(item.action)}
                           customBg={item.color}
                           customBgDisabled={item.colorDisabled}
                        />
                     </View>
                  )
               })
            }
         </ScrollView>
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
                  action={() => onConfirmCardSelection?.(foulCard)}
                  bg={colors.blue}
                  textColor="light"
                  disabled={!foulCard}
               />
            </View>
         </View>
      </Modal>
   );
};

export default ModalSelectFoulCard;
