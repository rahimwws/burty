import { TouchableOpacity, View, ScrollView } from "react-native";
import React, { useState, } from "react";
import Modal from "@/shared/ui/Modal";
import Typography from "@/shared/ui/Typography";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import styles from "./styles";
import { colors } from "@/shared/lib/theme";
import Cross from "@/shared/assets/icons/interface/Cross";
import TeamT from "@/features/statistics/model/types/TeamT";

type ModalSelectTeamProps = {
   visible: boolean
   onClose?: () => void
   onSelectTeam?: (team: TeamT) => void
   teams?: TeamT[]
}

const ModalSelectTeam = ({
   visible = false,
   onClose,
   onSelectTeam,
   teams
}: ModalSelectTeamProps) => {

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
            Select Team
         </Typography>
         <ScrollView
            style={{ maxHeight: '85%', width: '100%' }}
            showsVerticalScrollIndicator={false}
         >
            {
               teams?.map((team, index) => {
                  return (
                     <View
                        key={index}
                        style={{ marginBottom: 10 }}
                     >
                        <DarkButton
                           isRoute={false}
                           text={team.teamName}
                           action={() => onSelectTeam?.(team)}
                           disabled
                        />
                     </View>
                  )
               })
            }
         </ScrollView>
         {/* <View style={[
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
         </View> */}
      </Modal>
   );
};

export default ModalSelectTeam;
