import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import ReviewCard from "@/components/card/ReviewCard";
import { useReviews } from "@/features/reviews";
import { colors } from "@/shared/lib/theme";
import { toast } from "@/shared/ui/Toast";

const Review = ({ spaceId }: { spaceId?: string }) => {
  const navigation = useAppNavigation();

  const {
    data,
    isLoading,
  } = useReviews(spaceId);

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No reviews data'
      })
    }
  }, [data?.data.length, isLoading]);

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
          isLoading ?
            <ActivityIndicator color={colors.primary} />
            : data?.data.map(item => {
              return (
                <ReviewCard review={item} key={item.id} />
              )
            })
        }
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
