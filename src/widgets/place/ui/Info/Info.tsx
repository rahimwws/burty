import { View } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { BlurView } from "expo-blur";
import Star from "@/shared/assets/icons/interface/Star";
import Marker from "@/shared/assets/icons/interface/Marker";
import ProfileSvg from "@/shared/assets/icons/tabs/ProfileSvg";
import dayjs from 'dayjs';
import { PlaceT } from "@/shared/model/types";
import styles from "./styles";

type PlaceInfoProps = {
  reserved?: boolean;
  mentor?: boolean;
  place?: PlaceT
}

const PlaceInfo = ({
  reserved = false,
  mentor = false,
  place
}: PlaceInfoProps) => {

  const haveDistance = !!place?.distanceInM || !!place?.distance?.meters;
  const haveMinMaxPlayers = !!place?.minPlayers || !!place?.maxPlayers;
  const haveAverageRating = !!place?.averageRating;

  return (
    <View
      style={styles.wrap}
    >
      <View style={{}}>
        <Typography size={22} font="m" align="left">
          {place?.name}
        </Typography>
        <Typography
          font="m"
          align="left"
          size={14}
          styles={{ color: colors.light + "FFFCC", marginTop: 15 }}
        >
          {place?.address}
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
            ${Math.round(place?.minPrice || 0)}-${Math.round(place?.maxPrice || 0)}
          </Typography>
        )}
      </View>
      <View
        style={{
          gap: 10,
          alignItems: "center",
        }}
      >
        {
          !mentor ?
            haveAverageRating &&
            <View
              style={styles.card}
            >
              <BlurView
                intensity={30}
                tint="light"
                style={styles.cardInner}
              >
                {!mentor && <Star size={15} />}
                <Typography > {place?.averageRating?.toFixed(1)}</Typography>
              </BlurView>
            </View>
            :
            <View
              style={styles.card}
            >
              <BlurView
                intensity={30}
                tint="light"
                style={styles.cardInner}
              >
                <Typography>{dayjs(place?.openTime).format('H:mm')}</Typography>
              </BlurView>
            </View>
        }
        <View
          style={styles.distance}
        >
          {!mentor ? (
            haveDistance &&
            <Marker size={15} fill={colors.light + "fffCC"} />
          ) : (
            haveMinMaxPlayers &&
            <ProfileSvg size={15} fill={colors.light + "fffCC"} />
          )}
          {!mentor ? (
            haveDistance &&
            <Typography size={15} styles={{ color: colors.light + "fffCC" }}>
              {Math.round(place?.distanceInM || place?.distance?.meters || 0)} m
            </Typography>
          ) : (
            haveMinMaxPlayers &&
            <Typography size={15} styles={{ color: colors.light + "fffCC" }}>
              {place?.minPlayers} - {place?.maxPlayers}
            </Typography>
          )}
        </View>
      </View>
    </View >
  );
};

export default PlaceInfo;
