import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { openLink } from "@/shared/lib/utils/linkUtils";
import Link from "@/shared/assets/icons/interface/Link";
import Marker from "@/shared/assets/icons/interface/Marker";
import Call from "@/shared/assets/icons/interface/Call";
import Time from "@/shared/assets/icons/interface/Time";

type PlaceLinksProps = {
  link?: string
  address?: string
  phoneNumber?: string
  workTime?: string
}

const PlaceLinks = ({
  address = '',
  link = '',
  phoneNumber = '',
  workTime = ''
}: PlaceLinksProps) => {
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
        <TouchableOpacity
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
          onPress={() => openLink(link || '')}
        >
          <Link size={15} fill={colors.light} />
          <Typography>{link}</Typography>
        </TouchableOpacity>
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
          <Typography>{address}</Typography>
        </View>
        <TouchableOpacity
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
          onPress={() => openLink("tel:+99365123456")}
        >
          <Call size={15} fill={colors.light} />
          <Typography>{phoneNumber}</Typography>
        </TouchableOpacity>
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
          <Typography>Open: {workTime}</Typography>
        </View>
      </View>
    </>
  );
};

export default PlaceLinks;
