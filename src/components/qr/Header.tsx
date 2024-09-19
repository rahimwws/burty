import { View, Text, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "@/shared/lib/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Camera from "@/shared/assets/icons/interface/Camera";
import Gallery from "@/shared/assets/icons/interface/Gallery";
import { CameraType } from "expo-camera";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";

const Header = ({
  setFacing,
  facing,
}: {
  setFacing: Dispatch<SetStateAction<CameraType>>;
  facing: CameraType;
}) => {
  const insects = useSafeAreaInsets();
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        top: insects.top,
        paddingHorizontal: 10,
        zIndex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: colors.dark,
          height: 50,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: "5%",
          flexDirection: "row",
        }}
      >
        <Typography size={22} font="b">
          QR
        </Typography>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("QrDetail");
            // setFacing(facing === "back" ? "front" : "back");
          }}
        >
          <Camera size={30} fill={colors.light} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
