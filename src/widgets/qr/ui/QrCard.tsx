import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import { WorkoutDetail } from "@/widgets/place";
import { MentorPlaceCard } from "@/widgets/place";

const QrCard = () => {
  return (
    <View
      style={{
        width: "100%",
        padding: 20,
        backgroundColor: colors.dark,
        borderRadius: 15,
      }}
    >
      <MentorPlaceCard
        type="large"
        style={{
          width: "100%",
        }}
      />
      <WorkoutDetail showTitle={false} />
    </View>
  );
};

export default QrCard;
