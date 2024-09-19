import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import Link from "@/shared/assets/icons/interface/Link";
import Marker from "@/shared/assets/icons/interface/Marker";
import Call from "@/shared/assets/icons/interface/Call";
import Time from "@/shared/assets/icons/interface/Time";

const PlaceLinks = () => {
  return (
    <>
      <Typography
        styles={{ marginTop: "5%", marginBottom: "2%" }}
        size={22}
        font="m"
        align="left"
      >
        Info
      </Typography>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.dark,
          padding: 0,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderWidth: 1,
            borderColor: colors.dark,
            paddingVertical: 10,
            width: "100%",
            paddingLeft: 10,
            borderEndEndRadius: 10,
            borderEndStartRadius: 10,
          }}
        >
          <Link size={15} fill={colors.light} />
          <Typography>website.com</Typography>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderWidth: 1,
            borderColor: colors.dark,
            paddingVertical: 10,
            width: "100%",
            paddingLeft: 10,
            borderEndEndRadius: 10,
            borderEndStartRadius: 10,
          }}
        >
          <Marker size={15} fill={colors.light} />
          <Typography>2972 Westheimer Rd. Santa Ana, Illinois</Typography>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderWidth: 1,
            borderColor: colors.dark,
            paddingVertical: 10,

            paddingLeft: 10,
            borderEndEndRadius: 10,
            borderEndStartRadius: 10,
            width: "100%",
          }}
        >
          <Call size={15} fill={colors.light} />
          <Typography>(066) 242 42 12</Typography>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderWidth: 1,
            borderColor: colors.dark,
            paddingVertical: 10,

            paddingLeft: 10,
            width: "100%",
            borderEndEndRadius: 10,
            borderEndStartRadius: 10,
          }}
        >
          <Time size={15} fill={colors.light} />
          <Typography>Open: 8:00 AM - 10:00 PM</Typography>
        </View>
      </View>
    </>
  );
};

export default PlaceLinks;
