import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { PlaceCard } from "@/components/card";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useQuery } from "@tanstack/react-query";
import { spaces } from "@/features/spaces/model/routes";
import { useLocationStore } from "@/shared/store/location";
import { toast } from "@/shared/ui/Toast";

const List = () => {
  const navigation = useAppNavigation();
  const { latitude, longitude } = useLocationStore.getState();
  const { data, isLoading, isPending } = useQuery({
    queryKey: ["popular"],
    queryFn: () => spaces.getPopularSpaces(latitude, longitude),
    enabled: !!latitude && !!longitude,

  });

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No popular places data'
      })
    }
  }, [data?.data.length, isLoading]);

  // if (isPending) {
  //   return null;
  // }
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
          Popular
        </Typography>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ListSpaces", {
              name: "Popular",
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
