import { View, Text, FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ProfileView } from "@/widgets/profile";
import QrCard from "@/widgets/qr/ui/QrCard";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useUserBookings } from "@/features/mentor";

type RouteParams = {
  MyScreen: {
    qrCodeData: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const QrDetail = () => {
  const route = useRoute<MyScreenRouteProp>();
  // const { params: { qrCodeData } } = route;
  const qrCodeData = "asdf";
  const {
    data: userBookings,
    isLoading: userBok
  } = useUserBookings(qrCodeData)

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
          email: userBookings?.data.user.email,
          firstName: userBookings?.data.user.firstName,
          lastName: userBookings?.data.user.lastName,
          media: userBookings?.data.user.media
        }}
        qr
      />
      <FlatList
        data={userBookings?.data.bookings}
        renderItem={({ item }) => (
          <QrCard
            place={item.space}
            date={item.startDate}
            status={item.status}
            price={item.price}
          />
        )}
        contentContainerStyle={{
          gap: 20, paddingBottom: '10%'
        }}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", }}
        keyExtractor={(item, index) => item?.id ?? index?.toString()}
      />
    </ScreenLayout>
  );
};

export default QrDetail;
