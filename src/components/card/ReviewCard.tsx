import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { BlurView } from "expo-blur";
import Star from "@/shared/assets/icons/interface/Star";

const ReviewCard = ({ type = false }: { type?: "full" | false }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        gap: 10,
        width: "100%",
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: colors.gray,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
      <View
        style={{
          width: "90%",
        }}
      >
        {type === "full" && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <Typography size={20} font="m">
              Account name
            </Typography>
            <View
              style={{
                borderRadius: 100,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={30}
                tint="light"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.07)",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  padding: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Star size={15} />
                <Typography>4.5</Typography>
              </BlurView>
            </View>
          </View>
        )}
        <Typography
          align="left"
          size={14}
          styles={{ width: "90%", color: colors.light + "FFFCC" }}
        >
          Great location for evening training. The lighting is perfect and the
          turf is well-maintained!
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewCard;
