import { View, Text, FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ProfileView } from "@/widgets/profile";
import QrCard from "@/widgets/qr/ui/QrCard";

const QrDetail = () => {
  return (
    <ScreenLayout
      styles={{
        alignItems: "center",
      }}
      pb={0}
    >
      <Header title="Qr Detail" type="stack" />
      <ProfileView qr />
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => {
          return <QrCard />;
        }}
        contentContainerStyle={{
          gap: 20,
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      />
    </ScreenLayout>
  );
};

export default QrDetail;
