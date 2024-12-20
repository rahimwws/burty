import { ActivityIndicator, FlatList } from "react-native";
import React, { useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PlaceCard } from "@/components/card";
import { RouteProp, useRoute } from "@react-navigation/native";
import { PlaceT } from "@/shared/model/types";
import { useCategory } from "@/entities/category/lib/hooks/useCategory";
import { colors } from "@/shared/lib/theme";
import { toast } from "@/shared/ui/Toast";
type RouteParams = {
  spaces: {
    name: string;
    data: PlaceT[];
    categoryId?: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "spaces">;
const ListSpaces = () => {
  const navigation = useAppNavigation();
  const route = useRoute<MyScreenRouteProp>();

  const {
    data,
    isLoading,
    isPending
  } = useCategory(route?.params?.categoryId);

  useEffect(() => {
    if (route?.params?.categoryId && !data?.data.spaces.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No categories data'
      })
    }
  }, [data?.data?.spaces?.length, route?.params?.categoryId, isLoading]);

  return (
    <ScreenLayout pb={0}>
      <Header title={route.params.name} type="stack" />

      {
        route?.params?.categoryId && isLoading ?
          <ActivityIndicator color={colors.primary} />
          :
          <FlatList
            data={route?.params?.categoryId ? data?.data.spaces : route.params.data}
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
      }
    </ScreenLayout>
  );
};

export default ListSpaces;
