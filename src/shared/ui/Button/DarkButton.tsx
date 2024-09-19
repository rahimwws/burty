import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppNavigation } from "@/shared/lib/navigation";
import { ColorsT, colors } from "@/shared/lib/theme";
import Typography from "../Typography";
import { LightHeptic } from "@/shared/lib/heptics";
const DarkButton = ({
  text,
  isRoute,
  route = "",
  action = false,
  heptic = true,
  disabled = false,
  type = "default",
  bg,
  textColor,
}: {
  text: string;
  isRoute?: boolean;
  route?: string;
  action?: Function | false;
  heptic?: boolean;
  disabled?: boolean;
  type?: "default" | "rounded";
  bg?: keyof ColorsT;
  textColor?: keyof ColorsT;
}) => {
  const navigation = useAppNavigation();
  const HandleClick = () => {
    isRoute && navigation.navigate(route);
    action && action();
    heptic && LightHeptic();
  };
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        backgroundColor: bg
          ? colors[bg]
          : disabled
          ? colors.light + "FFF1A"
          : colors.light,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: type === "default" ? 5 : 100,
      }}
      activeOpacity={0.7}
      onPress={HandleClick}
    >
      <Typography
        size={18}
        styles={{
          color: textColor
            ? colors[textColor]
            : disabled
            ? colors.light + "fff80"
            : colors.background,
        }}
      >
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default DarkButton;
