import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const PassDetail = () => {
  return (
    <View
      style={{
        marginVertical: "3%",
        marginHorizontal: 10,
      }}
    >
      <Typography
        size={22}
        font="m"
        align="left"
        styles={{ marginBottom: "3%" }}
      >
        Details
      </Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography size={18} font="b">
          Start date
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
          End date
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
        }}
      >
        <Typography size={18} font="b">
          Pass type
        </Typography>
        <Typography color="gray" font="m">
          Monthly pass
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
          Freezer balance
        </Typography>

        <Typography color="gray" font="m">
          20 days
        </Typography>
      </View>
    </View>
  );
};

export default PassDetail;
