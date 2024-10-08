import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { PlaceCard } from "@/components/card";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useNearbySpaces } from "@/service/spaces/lib";

const List = () => {
  const navigation = useAppNavigation();
  const { data, isPending } = useNearbySpaces();

  if (isPending) {
    return null;
  }
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: "5%",
        }}
      >
        <Typography font="b" size={20}>
          Nearby
        </Typography>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListSpaces", {
              name: "Nearby",
              data: data?.data,
            })
          }
        >
          <Typography font="m" color="primary" size={14}>
            View all
          </Typography>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data?.data.slice(0, 3)}
        renderItem={({ item, index }) => {
          return <PlaceCard item={item} />;
        }}
        horizontal
        contentContainerStyle={{
          gap: 15,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default List;
