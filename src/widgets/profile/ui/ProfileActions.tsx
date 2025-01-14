import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Typography from "@/shared/ui/Typography";
import Exit from "@/shared/assets/icons/interface/Exit";
import { colors } from "@/shared/lib/theme";
import Trash from "@/shared/assets/icons/interface/Trash";
import { useDeleteAccount, useLogOut } from "../lib/hooks";
import { getModalConfigs } from "../lib/config";
import type { ModalConfigType } from "../model/types";
import Modal from "@/shared/ui/Modal";

type ProfileActionsProps = {
  /** @default false */
  isMentor?: boolean
}

const ProfileActions = ({isMentor}: ProfileActionsProps) => {
  const { mutate: mutateDeleteAccount } = useDeleteAccount();
  const { mutate: mutateLogOut } = useLogOut();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalConfigType | null>(null);
 
  const handleDeleteAccount = useCallback(() => {
    mutateDeleteAccount(isMentor)
  }, [isMentor]);

  const handleLogout = useCallback(() => {
    mutateLogOut()
  }, []);
 
  const modalConfigs = getModalConfigs(handleDeleteAccount, handleLogout);

  const handleShowModal = (
    config: typeof modalConfigs.logOut | typeof modalConfigs.deleteAccount
  ) => {
    setModalConfig(config);
  };

  useEffect(() => {
    if (modalConfig) {
      setShowModal(true);
    }
  }, [modalConfig]);

  return (
    <View
      style={{
        marginVertical: "5%",
      }}
    >
      <Typography
        size={22}
        font="b"
        styles={{
          marginVertical: "2%",
        }}
        align="left"
      >
        Account actions
      </Typography>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
        onPress={() => handleShowModal(modalConfigs.logOut)}
      >
        <Exit size={20} fill={colors.error} />
        <Typography size={18} font="m" color="error">
          Log out
        </Typography>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: "3%",
        }}
        onPress={() => handleShowModal(modalConfigs.deleteAccount)}
      >
        <Trash size={20} />
        <Typography size={18} font="m" color="error">
          Delete account
        </Typography>
      </TouchableOpacity>
      <Modal
        title={modalConfig?.title}
        description={modalConfig?.description}
        rightText={modalConfig?.rightText}
        visible={showModal}
        rightAction={() => {
          modalConfig?.mutate();
          setShowModal(false);
          setModalConfig(null);
        }}
        leftAction={() => {
          setShowModal(false);
          setModalConfig(null);
        }}
        leftText="No"
      />
    </View>
  );
};

export default ProfileActions;
