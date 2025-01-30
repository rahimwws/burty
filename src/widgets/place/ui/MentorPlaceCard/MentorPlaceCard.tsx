import {
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { LightHeptic } from "@/shared/lib/heptics";
import Marker from "@/shared/assets/icons/interface/Marker";
import { colors } from "@/shared/lib/theme";
import Star from "@/shared/assets/icons/interface/Star";
import { BlurView } from "expo-blur";
import { PlaceT } from "@/shared/model/types";
import { useAppNavigation } from "@/shared/lib/navigation";
import ProfileSvg from "@/shared/assets/icons/tabs/ProfileSvg";
import BottomLinearGradient from "@/shared/ui/BottomLinearGradient";
import Overlay from "@/shared/ui/Overlay";
import styles from "./styles";
import dayjs from "dayjs";

const MentorPlaceCard = ({
  place,
  type = "default",
  used = false,
  style,
}: {
  place?: {
    id: string
    openTime: string
    maxPlayers: string
  };
  /** @default "default" */
  type?: "default" | "large";
  /** @default false */
  used?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  const { width, height } = Dimensions.get("window");
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      style={[
        {
          width:
            type === "large" ? width * 0.95 : width / 1.5,
          height: height / 4,
          borderRadius: 15,
          opacity: used ? 0.95 : 1,
        },
        style,
      ]}
      onPress={() => {
        LightHeptic();
        navigation.navigate("MentorDetail", { finished: used, spaceId: place?.id });
      }}
    >
      <ImageBackground
        source={require("@/shared/assets/images/bg-card.png")}
        style={{ width: "100%", height: height / 4 }}
        resizeMode="cover"
        borderRadius={15}
      >
        {used && <Overlay />}
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
            {dayjs(place?.openTime).format('DD.MM.YYYY')}
          </Typography>

          <View
            style={styles.bottomRow}
          >
            <View
              style={styles.playerCount}
            >
              <ProfileSvg
                size={15}
                fill={used ? "#A0A0A0" : colors.light + "fffCC"}
              />
              <Typography
                size={15}
                styles={{ color: used ? "#A0A0A0" : colors.light + "fffCC" }}
              >
                {place?.maxPlayers || 0}
              </Typography>
            </View>

            <Typography
              font="b"
              styles={{ color: used ? "#A0A0A0" : colors.light }}
            >
              {dayjs(place?.openTime).format('HH:mm')}
            </Typography>
          </View>
        </View>

        <BottomLinearGradient />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MentorPlaceCard;
