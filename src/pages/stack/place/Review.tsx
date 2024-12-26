import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import ReviewCard from "@/components/card/ReviewCard";
import { useReviews } from "@/features/reviews";
import { RouteProp, useRoute } from "@react-navigation/native";
import { toast } from "@/shared/ui/Toast";
import { useAppNavigation } from "@/shared/lib/navigation";

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
      <LargeButton
        bg={colors.light}
        text="Add Review"
        type="rounded"
        theme="outline"
        textColor="light"
        isRoute={false}
        action={() => navigator.navigate("CreateReview", {
          spaceId: route.params?.spaceId
        })}
      />
    </ScreenLayout>
  );
};

export default Review;
