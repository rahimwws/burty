import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Workout = ({ showTitle = true }: { showTitle?: boolean }) => {
  return (
    <View
      style={{
        marginVertical: "3%",
      }}
    >
      {showTitle && (
        <Typography
          size={22}
          font="m"
          align="left"
          styles={{ marginBottom: "3%" }}
        >
          Work Detail
        </Typography>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography size={18} font="b">
          Date
        </Typography>
        <Typography color="gray" font="m">
          22 May, 2024
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: "5%",
        }}
      >
        <Typography size={18} font="b">
          Pass type
        </Typography>
        <Typography color="gray" font="m">
          Single visit
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography size={18} font="b">
          Price
        </Typography>
        <Typography color="gray" font="m">
          20$
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <Typography size={18} font="b">
          Status
        </Typography>
        <View
          style={{
            padding: 5,
            paddingHorizontal: 10,
            backgroundColor: colors.primary,
            borderRadius: 3,
          }}
        >
          <Typography color="background" font="m">
            Paid
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Workout;
