import { View, Text, FlatList } from "react-native";
import React from "react";
import { PlaceCard } from "@/components/card";
import Typography from "@/shared/ui/Typography";

const List = () => {
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
        <Typography font="m" color="primary" size={14}>
          View all
        </Typography>
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => {
          return <PlaceCard />;
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
