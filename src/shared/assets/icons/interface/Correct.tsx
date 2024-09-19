import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Correct = ({ size }: { size: number }) => {
  return (
    <Svg width={size} height={size + 3} viewBox="0 0 10 12" fill="none">
      <Path
        d="M8.33464 3.25L3.7513 8.75L1.66797 6.25"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Correct;
