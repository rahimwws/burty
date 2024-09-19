import { View, Text } from "react-native";
import React from "react";
import { Circle, Path, Svg } from "react-native-svg";

const Facebook = () => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Circle
        cx="13"
        cy="13"
        r="12"
        fill="#9BF508"
        stroke="#151515"
        strokeWidth="2"
      />
      <Path
        d="M17 8H16C14.5 8 13 8.8 13 12C13 15.2 13 21.8333 13 25M17 15H9"
        stroke="#151515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Facebook;
