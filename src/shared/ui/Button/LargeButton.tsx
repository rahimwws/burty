import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppNavigation } from "@/shared/lib/navigation";
import { ColorsT, colors } from "@/shared/lib/theme";
import Typography from "../Typography";
import { LightHeptic } from "@/shared/lib/heptics";
const LargeButton = ({
  text,
  isRoute,
  route = "",
  action = false,
  heptic = true,
  disabled = false,
  type = "default",
  bg,
  textColor,
  theme,
}: {
  text: string;
  isRoute?: boolean;
  route?: string;
  action?: Function | false;
  heptic?: boolean;
  disabled?: boolean;
  type?: "default" | "rounded";
  bg?: string;
  textColor?: keyof ColorsT;
  theme?: "default" | "outline";
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
        backgroundColor:
          theme === "outline" ? "transparent" : bg ?? colors.primary,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: type === "default" ? 5 : 100,
        opacity: disabled ? 0.5 : 1,
        borderWidth: theme === "outline" ? 1 : 0,
        borderColor: theme === "outline" ? bg : "transparent",
      }}
      disabled={disabled}
      activeOpacity={0.7}
      onPress={HandleClick}
    >
      <Typography color={textColor ?? "background"} size={18} font="m">
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default LargeButton;
