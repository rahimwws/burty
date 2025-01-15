import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { ReactNode } from "react";
import { useAppNavigation } from "@/shared/lib/navigation";
import { ColorsT, colors } from "@/shared/lib/theme";
import Typography from "../../Typography";
import { LightHeptic } from "@/shared/lib/heptics";
import styles from "./styles";
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
  isLoading = false,
  startIcon
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
  /** @default false */
  isLoading?: boolean
  startIcon?: ReactNode
}) => {
  const navigation = useAppNavigation();
  const HandleClick = () => {
    isRoute && navigation.navigate(route);
    action && action();
    heptic && LightHeptic();
  };
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          backgroundColor:
            theme === "outline" ? "transparent" : bg ?? colors.primary,
          borderRadius: type === "default" ? 5 : 100,
          opacity: disabled ? 0.5 : 1,
          borderWidth: theme === "outline" ? 1 : 0,
          borderColor: theme === "outline" ? bg : "transparent",
        }
      ]}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
      onPress={HandleClick}
    >
      {
        isLoading ?
          <ActivityIndicator color={textColor ? colors[textColor] : colors.dark} />
          :
          <View style={styles.verticalCenter}>
            {startIcon}
            <Typography
              styles={{ marginLeft: startIcon ? '2%' : 0 }}
              color={textColor ?? "background"}
              size={18}
              font="m"
            >
              {text}
            </Typography>
          </View>
      }
    </TouchableOpacity>
  );
};

export default LargeButton;
