import { FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PlaceCard } from "@/widgets/place";
import { PlaceT } from "@/shared/model/types";

const places: PlaceT[] = [
  {
    address: "",
    name: "Basketball place",
    distanceInM: 300,
    minPrice: 10,
    maxPrice: 20,
  },
]

const StatisticsList = () => {
  const navigation = useAppNavigation();

  return (
    <ScreenLayout>
      <Header title="Personal Statistic" type="stack" />

      <FlatList
        data={places}
        renderItem={({ item, index }) => {
          return (
            <PlaceCard
              item={item}
              type="large"
              startDate="12.02.2024"
              startTime="13:00"
              personalScore={8}
            />
          );
        }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
      />
    </ScreenLayout>
  );
};

export default StatisticsList;
