import { View, Text, StyleProp, ViewProps, ViewStyle } from "react-native";
import React from "react";
import { ColorsT, colors } from "@/shared/lib/theme";

const Line = ({
  color,
  styles,
}: {
  color: keyof ColorsT;
  styles?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[
        styles,
        {
          height: 1,
          width: "100%",
          backgroundColor: colors[color],
        },
      ]}
    ></View>
  );
};

export default Line;
