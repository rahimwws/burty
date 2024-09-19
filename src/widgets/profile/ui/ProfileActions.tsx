import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import Exit from "@/shared/assets/icons/interface/Exit";
import { colors } from "@/shared/lib/theme";
import Trash from "@/shared/assets/icons/interface/Trash";
import { useDeleteAccount } from "../lib/hooks";
import Modal from "@/shared/ui/Modal";

const ProfileActions = () => {
  const { mutate } = useDeleteAccount();
  const [showModal, setShowModal] = useState<boolean>(false);

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
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Exit size={20} fill={colors.error} />
        <Typography size={18} font="m" color="error">
          Log out
        </Typography>
      </View>
      <TouchableOpacity
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: "3%",
        }}
        onPress={() => setShowModal(true)}
      >
        <Trash size={20} />
        <Typography size={18} font="m" color="error">
          Delete account
        </Typography>
      </TouchableOpacity>
      <Modal
        title="Are you sure?"
        description="Do you want to delete your account without recovering"
        rightText="Yes"
        visible={showModal}
        rightAction={() => {
          mutate();
          setShowModal(false);
        }}
        leftAction={() => setShowModal(false)}
        leftText="No"
      />
    </View>
  );
};

export default ProfileActions;
