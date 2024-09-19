import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { BlurView } from "expo-blur";
import Star from "@/shared/assets/icons/interface/Star";
import Marker from "@/shared/assets/icons/interface/Marker";
import ProfileSvg from "@/shared/assets/icons/tabs/ProfileSvg";

const PlaceInfo = ({
  reserved = false,
  mentor = false,
}: {
  reserved?: boolean;
  mentor?: boolean;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 5,
      }}
    >
      <View style={{}}>
        <Typography size={22} font="m" align="left">
          Place Name
        </Typography>
        <Typography
          font="m"
          align="left"
          size={14}
          styles={{ color: colors.light + "FFFCC", marginTop: 15 }}
        >
          2972 Westheimer Rd. Santa Ana, Illinois
        </Typography>
        {!reserved && (
          <Typography
            size={18}
            font="b"
            align="left"
            styles={{
              marginTop: 5,
            }}
          >
            $100-$300
          </Typography>
        )}
      </View>
      <View
        style={{
          gap: 10,
          alignItems: "center",
        }}
      >
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
            {!mentor && <Star size={15} />}
            {!mentor ? (
              <Typography>4.5</Typography>
            ) : (
              <Typography>19:00</Typography>
            )}
          </BlurView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          {!mentor ? (
            <Marker size={15} fill={colors.light + "fffCC"} />
          ) : (
            <ProfileSvg size={15} fill={colors.light + "fffCC"} />
          )}
          {!mentor ? (
            <Typography size={15} styles={{ color: colors.light + "fffCC" }}>
              {300} m
            </Typography>
          ) : (
            <Typography size={15} styles={{ color: colors.light + "fffCC" }}>
              {12}
            </Typography>
          )}
        </View>
      </View>
    </View>
  );
};

export default PlaceInfo;
