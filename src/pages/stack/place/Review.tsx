import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import ReviewCard from "@/components/card/ReviewCard";
import { useReviews } from "@/features/reviews";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { toast } from "@/shared/ui/Toast";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useBookings } from "@/features/booking";

type RouteParams = {
  MyScreen: {
    spaceId: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const Review = () => {
  const navigator = useAppNavigation();
  const route = useRoute<MyScreenRouteProp>();
  const {
    data,
    isLoading,
  } = useReviews(route.params?.spaceId);
  const {
    data: bookings,
  } = useBookings(90);

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No reviews data'
      })
    }
  }, [data?.data.length, isLoading]);

  return (
    <ScreenLayout>
      <Header type="stack" title="Review" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: "5%",
        }}
      >
        <View
          style={{
            flex: 1,
            marginVertical: "5%",
            gap: 20,
          }}
        >
          {
            isLoading ?
              <ActivityIndicator color={colors.primary} />
              :
              data?.data.map(item => {
                return (
                  <ReviewCard type="full" review={item} key={item.id} />
                )
              })
          }
        </View>
      </ScrollView>
      {
        bookings?.data.length ?
          <LargeButton
            bg={colors.light}
            text="Add Review"
            type="rounded"
            theme="outline"
            textColor="light"
            isRoute={false}
            action={() => navigator.navigate("CreateReview", {
              bookingId: bookings.data.find(item => item.spaceId == route.params?.spaceId)?.id
            })}
          />
          : null
      }
    </ScreenLayout>
  );
};

export default Review;
