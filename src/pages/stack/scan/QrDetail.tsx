import { View, Text, FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ProfileView } from "@/widgets/profile";
import QrCard from "@/widgets/qr/ui/QrCard";
import { RouteProp, useRoute } from "@react-navigation/native";

type RouteParams = {
  MyScreen: {
    qrCodeData: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const QrDetail = () => {
  const route = useRoute<MyScreenRouteProp>();
  const { params: { qrCodeData } } = route;

  return (
    <ScreenLayout
      styles={{
        alignItems: "center",
      }}
      pb={0}
    >
      <Header title="Qr Detail" type="stack" />
      <ProfileView
        item={{
          firstName: qrCodeData?.split(' ')?.[0],
          lastName: qrCodeData?.split(' ')?.[1]
        }}
        qr
      />
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
