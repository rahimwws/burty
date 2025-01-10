import { TouchableOpacity, View, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction, useState, } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import styles from "./styles";
import { colors } from "@/shared/lib/theme";
import Cross from "@/shared/assets/icons/interface/Cross";

const foulCards = [
   { id: 1, name: "Yellow", color: "#D8C141", colorDisabled: '#D8C1411A' },
   { id: 2, name: "Red", color: "#D84641", colorDisabled: '#D846411A' },
]

type ModalSelectFoulCardProps = {
   visible: boolean
   onClose?: (foulCard: string) => void
}

const ModalSelectFoulCard = ({
   visible = false,
   onClose,
}: ModalSelectFoulCardProps) => {
   const [foulCard, setFoulCard] = useState<string>("");

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
                        key={item.id}
                        style={{ marginBottom: 10 }}
                     >
                        <DarkButton
                           isRoute={false}
                           text={item.name}
                           disabled={item.name !== foulCard}
                           action={() => setFoulCard(item.name)}
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
                  action={() => onClose?.(foulCard)}
                  bg={colors.input}
                  textColor="light"
               />
            </View>
            <View style={{ width: '65%' }}>
               <LargeButton
                  text="Cofirm"
                  action={() => onClose?.(foulCard)}
                  bg={colors.blue}
                  textColor="light"
               />
            </View>
         </View>
      </Modal>
   );
};

export default ModalSelectFoulCard;
