import { View, Text } from "react-native";
import React from "react";
import { Circle, Svg } from "react-native-svg";

const More = () => {
  return (
    <Svg width="5" height="18" viewBox="0 0 5 18" fill="none">
      <Circle cx="2.5" cy="2.75" r="1.875" fill="white" />
      <Circle cx="2.5" cy="9" r="1.875" fill="white" />
      <Circle cx="2.5" cy="15.25" r="1.875" fill="white" />
    </Svg>
  );
};

export default More;
