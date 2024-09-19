import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const RowButton = ({ children, styles }: Props) => {
  return (
    <View
      style={[
        styles,
        {
          flexDirection: "row",
          alignItems: "center",
          height: 45,
          gap: 3,
          justifyContent: "center",
        },
      ]}
    >
      {children}
    </View>
  );
};

export default RowButton;
