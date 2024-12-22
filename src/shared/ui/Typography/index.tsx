import { View, Text, StyleProp, TextStyle, TextProps } from "react-native";
import React from "react";
import { ColorsT, colors, fonts } from "../../lib/theme";

type AlignSetting = "auto" | "left" | "right" | "center" | "justify";
type Props = {
  children: React.ReactNode;
  size?: number;
  color?: keyof ColorsT;
  font?: keyof fonts;
  align?: AlignSetting;
  styles?: StyleProp<TextStyle>;
  textProps?: TextProps;
  numberOfLines?: number
};
const Typography = ({
  children,
  size = 16,
  color = "light",
  font = "r",
  align = "center",
  styles,
  textProps,
  numberOfLines
}: Props) => {
  return (
    <Text
      style={{
        fontFamily: font,
        fontSize: size,
        color: colors[color],
        textAlign: align,
        ...(styles as Object),
      }}
      {...textProps}
      adjustsFontSizeToFit={false}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default Typography;
