import { View, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import ReviewCard from "@/components/card/ReviewCard";
import ReviewT from "@/features/reviews/model/types/Review";

const Review = ({ reviews, spaceId }: { reviews?: ReviewT[], spaceId?: string }) => {
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
        {
          reviews?.map(item => {
            return (
              <ReviewCard review={item} key={item.id} />
            )
          })
        }
        <TouchableOpacity
          style={{ marginVertical: "3%" }}
          onPress={() => navigation.navigate("Review", { spaceId })}
        >
          <Typography>Show more</Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Review;
