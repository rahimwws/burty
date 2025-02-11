import { View, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { openLink } from "@/shared/lib/utils/linkUtils";
import Link from "@/shared/assets/icons/interface/Link";
import Marker from "@/shared/assets/icons/interface/Marker";
import Call from "@/shared/assets/icons/interface/Call";
import Time from "@/shared/assets/icons/interface/Time";
import styles from "./styles";

type PlaceLinksProps = {
  link?: string
  address?: string
  phoneNumber?: string
  workTime?: string
  /** @default false */
  isMentor?: boolean
}

const PlaceLinks = ({
  address = '',
  link = '',
  phoneNumber = '',
  workTime = '',
  isMentor = false
}: PlaceLinksProps) => {
  return (
    <>
      <Typography
        styles={{ marginTop: "5%", marginBottom: "2%" }}
        size={22}
        font="m"
        align="left"
      >
        {isMentor ? "Statistics" : "Info"}
      </Typography>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.dark,
          padding: 0,
          borderRadius: 10,
        }}
      >
        {
          isMentor ?
            <View
              style={styles.row}
            >
              <Link size={15} fill={colors.light} />
              <Typography>{link}</Typography>
            </View>
            :
            <TouchableOpacity
              style={styles.row}
              onPress={() => openLink(link || '')}
            >
              <Link size={15} fill={colors.light} />
              <Typography>{link}</Typography>
            </TouchableOpacity>
        }
        <View
          style={styles.row}
        >
          <Marker size={15} fill={colors.light} />
          <Typography>{address}</Typography>
        </View>
        {
          !isMentor ?
            <TouchableOpacity
              style={styles.row}
              onPress={() => openLink(`tel:${phoneNumber}`)}
            >
              <Call size={15} fill={colors.light} />
              <Typography>{phoneNumber}</Typography>
            </TouchableOpacity>
            : null
        }
        <View
          style={styles.row}
        >
          <Time size={15} fill={colors.light} />
          <Typography>{!isMentor ? `Open: ${workTime}` : workTime}</Typography>
        </View>
      </View>
    </>
  );
};

export default PlaceLinks;
