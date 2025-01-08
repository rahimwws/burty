import {
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { LightHeptic } from "@/shared/lib/heptics";
import { colors } from "@/shared/lib/theme";
import { PlaceT } from "@/shared/model/types";
import { useAppNavigation } from "@/shared/lib/navigation";
import dayjs from "dayjs";
import styles from "./styles";
import Overlay from "@/shared/ui/Overlay";
import BottomLinearGradient from "@/shared/ui/BottomLinearGradient";
import { Distance, MinMaxPrice, RatingBadge } from "@/entities/place/ui";
import TimeBadge from "@/entities/place/ui/TimeBadge";

const PlaceCard = ({
  item,
  type = "default",
  startDate,
  startTime,
  used = false,
  bookingId,
  personalScore,
}: {
  item?: PlaceT;
  /** @default "default" */
  type?: "default" | "large";
  /** @default false */
  used?: boolean;
  startDate?: string
  startTime?: string
  bookingId?: string
  personalScore?: number
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useAppNavigation();

  const handlePress = () => {
    LightHeptic();
    if (bookingId)
      navigation.navigate("WorkoutPlaceDetail", {
        finished: used,
        bookingId
      });
    else if (personalScore)
      navigation.navigate("StatisticsDetails");
    else
      navigation.navigate("PlaceDetail", {
        placeId: item?.id,
      });
  }
  const haveDistance = !!item?.distanceInM || !!item?.distance?.meters;
  const haveImage = !!item?.medias?.[0]?.filePath;

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          opacity: used ? 0.95 : 1,
          height: height / 4,
          width: type === "large" ? width * 0.95 : width / 1.5,
        },
      ]}
      onPress={() => handlePress()}
    >
      <ImageBackground
        source={
          haveImage ?
            { uri: item.medias[0].filePath }
            :
            require("@/shared/assets/images/bg-card.png")
        }
        style={{ width: "100%", height: height / 4 }}
        resizeMode="cover"
        borderRadius={15}
      >
        {used && <Overlay />}

        <View style={styles.rating}>
          <Typography size={16} font="m" styles={{ marginRight: 10, }}>
            Personal score
          </Typography>
          {
            !personalScore ?
              typeof item?.averageRating == 'number' ?
                <RatingBadge
                  isUsed={used}
                  rating={item.averageRating}
                />
                : null
              :
              <RatingBadge
                isUsed={used}
                rating={personalScore}
                isStatisticsList
              />
          }
        </View>

        <View
          style={styles.timeWrap}
        >
          {
            !!startTime &&
            <TimeBadge type="time" time={startTime} />
          }
          {
            !!startDate &&
            <TimeBadge type="date" time={dayjs(startDate).format('DD.MM.YYYY')} />
          }
        </View>

        <View
          style={styles.content}
        >
          <Typography
            size={18}
            font="b"
            align="left"
            styles={{
              color: used ? "#A0A0A0" : colors.light,
            }}
          >
            {item?.name}
          </Typography>

          <View
            style={[
              styles.contentInner,
              haveDistance ? styles.justifyBetween : styles.justifyEnd
            ]}
          >
            {
              haveDistance &&
              <Distance
                isUsed={used}
                distance={Math.round(item?.distanceInM || item?.distance?.meters || 0)}
              />
            }

            <MinMaxPrice
              isUsed={used}
              minPrice={Math.round(item?.minPrice || 0)}
              maxPrice={Math.round(item?.maxPrice || 0)}
            />
          </View>
        </View>

        <BottomLinearGradient />
      </ImageBackground>
    </TouchableOpacity>
  );
};


export default PlaceCard;
