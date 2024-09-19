import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import ReviewCard from "@/components/card/ReviewCard";

const Review = () => {
  const navigation = useAppNavigation();
  return (
    <View style={{ marginTop: "3%" }}>
      <Typography
        size={22}
        font="m"
        align="left"
        styles={{ marginBottom: "3%" }}
      >
        Review
      </Typography>
      <View
        style={{
          gap: 10,
        }}
      >
        <ReviewCard />
        <ReviewCard />
        <TouchableOpacity
          style={{ marginVertical: "3%" }}
          onPress={() => navigation.navigate("Review")}
        >
          <Typography>Show more</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Review;
