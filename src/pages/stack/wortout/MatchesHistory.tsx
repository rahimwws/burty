import { FlatList, RefreshControl } from "react-native";
import React, { useEffect, useMemo } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { MentorPlaceCard } from "@/widgets/place";
import Line from "@/shared/ui/Lines";
import { useMatches } from "@/features/mentor";
import { toast } from "@/shared/ui/Toast";
import isTimeOver from "@/shared/lib/utils/isTimeOver";
import { colors } from "@/shared/lib/theme";

const MatchesHistory = () => {
   const {
      data: matchesPages,
      isLoading: matchesLoading,
      fetchNextPage: matchesFetchNextPage,
      isError: matchesError,
      hasNextPage: matchesHasNextPage,
      isFetchingNextPage: matchesFetchingNextPage,
      refetch: matchesRefetch,
      isRefetching: matchesRefetching
   } = useMatches({
      page: 1,
      take: 10,
   });

   useEffect(() => {
      if (!matchesPages?.pages[0].data.length && !matchesLoading) {
         toast.show({
            type: 'error',
            description: 'No matches data'
         })
      }
   }, [matchesPages?.pages[0]?.data?.length, matchesLoading]);

   const matches = useMemo(() => {
      return matchesPages?.pages.map(page => page.data).flat();
   }, [matchesPages?.pages])

   return (
      <ScreenLayout>
         <Header title="Matches history" type="default" />
         <Line color="primary" styles={{ opacity: 0.7, marginVertical: "3%" }} />
         <FlatList
            refreshControl={
               <RefreshControl
                  colors={[colors.primary]}
                  tintColor={colors.primary}
                  refreshing={matchesRefetching}
                  onRefresh={matchesRefetch}
               />
            }
            data={matches || []}
            renderItem={({ item }) => {
               return (
                  <MentorPlaceCard
                     type="large"
                     place={item.space}
                     used={isTimeOver({ startDate: item.space.openTime, endTime: item.space.endTime })}
                     matchId={item.id}
                     isHistory
                  />
               );
            }}
            contentContainerStyle={{
               gap: 20,
               paddingBottom: '14%',
            }}
            showsHorizontalScrollIndicator={false}
            style={{
               marginVertical: "5%",
            }}
            keyExtractor={(item, index) => {
               return item?.id ?? index?.toString()
            }}
            onEndReached={() => {
               if (
                  (!matchesLoading || !matchesError) &&
                  !matchesFetchingNextPage && matchesHasNextPage
               ) {
                  matchesFetchNextPage();
               }
            }}
            onEndReachedThreshold={0.5}
         />
      </ScreenLayout>
   );
};

export default MatchesHistory;
