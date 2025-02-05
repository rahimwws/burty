import { FlatList } from "react-native";
import React, { useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { MentorPlaceCard } from "@/widgets/place";
import Line from "@/shared/ui/Lines";
import { useLinkedSpaces } from "@/features/mentor";
import { toast } from "@/shared/ui/Toast";
import isTimeOver from "@/shared/lib/utils/isTimeOver";

const Matches = () => {
  const {
    data: matches,
    isLoading: matchesLoading,
    isError: matchesError,
  } = useLinkedSpaces();

  useEffect(() => {
    if (!matches?.data.length && !matchesLoading) {
      toast.show({
        type: 'error',
        description: 'No matches data'
      })
    }
  }, [matches?.data?.length, matchesLoading]);


  return (
    <ScreenLayout>
      <Header title="Matches" type="default" />
      <Line color="primary" styles={{ opacity: 0.7, marginVertical: "3%" }} />
      <FlatList
        data={matches?.data || []}
        renderItem={({ item }) => {
          return (
            <MentorPlaceCard
              type="large"
              place={item}
              used={isTimeOver({ startDate: item.openTime, endTime: item.endTime })}
            />
          );
        }}
        contentContainerStyle={{
          gap: 20,
        }}
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: "5%",
        }}
        keyExtractor={(item, index) => item?.id ?? index?.toString()}
      />
    </ScreenLayout>
  );
};

export default Matches;
