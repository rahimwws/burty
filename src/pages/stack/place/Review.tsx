import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import ReviewCard from "@/components/card/ReviewCard";

const Review = () => {
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
          <ReviewCard type="full" />
          <ReviewCard type="full" />
          <ReviewCard type="full" />
          <ReviewCard type="full" />
          <ReviewCard type="full" />
          <ReviewCard type="full" />
          <ReviewCard type="full" />
        </View>
      </ScrollView>

      <LargeButton
        bg={colors.light}
        text="Add Review"
        type="rounded"
        theme="outline"
        textColor="light"
        isRoute
        route="CreateReview"
      />
    </ScreenLayout>
  );
};

export default Review;
