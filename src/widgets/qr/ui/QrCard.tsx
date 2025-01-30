import { View } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import { WorkoutDetail } from "@/widgets/place";
import { MentorPlaceCard } from "@/widgets/place";
import { PlaceT } from "@/shared/model/types";

type QrCardProps = {
  date?: string
  passType?: string
  price?: number
  status?: string
  place?: {
    id: string
    openTime: string
    maxPlayers: string
  }
}

const QrCard = ({
  date,
  passType,
  price,
  status,
  place,
}: QrCardProps) => {
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
        place={place}
      />
      <WorkoutDetail
        showTitle={false}
        date={date}
        passType={passType}
        price={price}
        status={status}
      />
    </View>
  );
};

export default QrCard;
