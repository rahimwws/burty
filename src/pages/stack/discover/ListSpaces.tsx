import { FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PlaceCard } from "@/components/card";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PlaceT } from "@/shared/model/types";
type RouteParams = {
  spaces: {
    name: string;
    data: PlaceT[];
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "spaces">;
const ListSpaces = () => {
  const navigation = useAppNavigation();
  const route = useRoute<MyScreenRouteProp>();
  return (
    <ScreenLayout pb={0}>
      <Header title={route.params.name} type="stack" />

      <FlatList
        data={route.params.data}
        renderItem={({ item, index }) => {
          return <PlaceCard type="large" key={index} item={item} />;
        }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
          paddingBottom: "20%",
        }}
        showsVerticalScrollIndicator={false}
        style={{
          marginVertical: "5%",
        }}
      />
    </ScreenLayout>
  );
};

export default ListSpaces;
