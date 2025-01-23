import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useMemo } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PlaceCard } from "@/widgets/place";
import { useStatisticList } from "@/features/statistics";
import useUserIdStore from "@/features/auth/model/stores/userId";
import { toast } from "@/shared/ui/Toast";
import getDateOnly from "@/shared/lib/utils/getDateOnly";
import getTimeOnly from "@/shared/lib/utils/getTimeOnly";
import { colors } from "@/shared/lib/theme";



const StatisticsList = () => {
  const navigation = useAppNavigation();
  const { id: userId } = useUserIdStore()

  const {
    data: statisticsPages,
    isLoading: statisticsLoading,
    fetchNextPage: statisticsFetchNextPage,
    isError: statisticsError,
    hasNextPage: statisticsHasNextPage,
    isFetchingNextPage: statisticsFetchingNextPage,
    refetch: statisticsRefetch,
    isRefetching: statisticsRefetching
  } = useStatisticList({
    page: 1,
    take: 10,
    userId
  });

  useEffect(() => {
    if (!statisticsPages?.pages[0].data.length && !statisticsLoading) {
      toast.show({
        type: 'error',
        description: 'No personal statistics data'
      })
    }
  }, [statisticsPages?.pages[0].data.length]);

  const statistics = useMemo(() => {
    return statisticsPages?.pages.map(page => page.data).flat();
  }, [statisticsPages?.pages])

  return (
    <ScreenLayout>
      <Header title="Personal Statistic" type="stack" />

      <FlatList
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={statisticsRefetching}
            onRefresh={statisticsRefetch}
          />
        }
        data={statistics || []}
        renderItem={({ item }) => {
          return (
            <PlaceCard
              item={item}
              type="large"
              startDate={getDateOnly(item.endDate, "DD.MM.YYYY")}
              startTime={getTimeOnly(item.endDate, "HH:ss")}
              // personalScore={}
              isStatistics
            />
          );
        }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item?.id ?? index?.toString()}
        onEndReached={() => {
          if (
            (!statisticsLoading || !statisticsError) &&
            !statisticsFetchingNextPage && statisticsHasNextPage
          ) {
            statisticsFetchNextPage();
          }
        }}
        onEndReachedThreshold={0.3}
      />
    </ScreenLayout>
  );
};

export default StatisticsList;
