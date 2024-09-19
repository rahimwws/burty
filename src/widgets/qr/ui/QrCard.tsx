import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import { WorkoutDetail } from "@/widgets/place";
import { MentorPlace } from "@/components/card";

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
      <MentorPlace
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
