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
import { LinearGradient } from "expo-linear-gradient";
import Star from "@/shared/assets/icons/interface/Star";
import { BlurView } from "expo-blur";
import { PlaceT } from "@/shared/model/types";
import { useAppNavigation } from "@/shared/lib/navigation";
import ProfileSvg from "@/shared/assets/icons/tabs/ProfileSvg";

const MentorPlace = ({
  item,
  type = "default",
  used = false,
  style,
}: {
  item?: PlaceT;
  type?: "default" | "large" | "small";
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
            type === "large" || type === "small" ? width * 0.95 : width / 1.5,
          height: height / 4,
          borderRadius: 15,
          opacity: used ? 0.95 : 1,
        },
        style,
      ]}
      onPress={() => {
        LightHeptic();
        navigation.navigate("MentorDetail", { finished: used });
      }}
    >
      <ImageBackground
        source={require("@/shared/assets/images/bg-card.png")}
        style={{ width: "100%", height: height / 4 }}
        resizeMode="cover"
        borderRadius={15}
      >
        {used && <View style={styles.overlay} />}
        <View
          style={{
            position: "absolute",
            bottom: "3%",
            left: "5%",
            width: "90%",
            zIndex: 1,
          }}
        >
          <Typography
            size={18}
            font="b"
            align="left"
            styles={{
              color: used ? "#A0A0A0" : colors.light,
            }}
          >
            27.08.2024
          </Typography>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: "3%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <ProfileSvg
                size={15}
                fill={used ? "#A0A0A0" : colors.light + "fffCC"}
              />
              <Typography
                size={15}
                styles={{ color: used ? "#A0A0A0" : colors.light + "fffCC" }}
              >
                Number of players
              </Typography>
            </View>

            <Typography
              font="b"
              styles={{ color: used ? "#A0A0A0" : colors.light }}
            >
              19:00
            </Typography>
          </View>
        </View>

        <LinearGradient
          colors={["rgba(0, 0, 0, 0.2)", "#020202"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 50,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(100, 100, 100, 0.6)",
    borderRadius: 15,
  },
});

export default MentorPlace;
