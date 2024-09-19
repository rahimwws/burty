import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import CommentCard from "@/components/card/CommentCard";
import Modal from "@/shared/ui/Modal";
import { DarkButton } from "@/shared/ui/Button";
import ModalComment from "@/widgets/comments/ui";

const AddComment = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <ScreenLayout>
      <Header
        title="Workout Detail"
        type="stack"
        right
        action={() => setShowModal(true)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <View
          style={{
            gap: 5,
            marginVertical: "7%",
          }}
        >
          <Typography size={22} font="b">
            Place name
          </Typography>
          <Typography>Start 15:00</Typography>
        </View>

        <View
          style={{
            flex: 1,
            gap: 10,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            return <CommentCard key={index} />;
          })}
        </View>
      </ScrollView>
      <ModalComment visible={showModal} setVisible={setShowModal} />
    </ScreenLayout>
  );
};

export default AddComment;
