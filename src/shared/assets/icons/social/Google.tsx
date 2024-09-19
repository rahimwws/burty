import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Google = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M16.0978 3.38055C14.578 1.98052 12.6227 1.14612 10.5603 1.01747C8.49799 0.888817 6.45417 1.47376 4.77216 2.67405C3.09015 3.87434 1.8724 5.61687 1.32343 7.60897C0.774458 9.60108 0.927706 11.7214 1.75744 13.6139C2.58717 15.5063 4.04284 17.0556 5.87997 18.0016C7.7171 18.9475 9.82378 19.2325 11.8462 18.8086C13.8686 18.3847 15.6836 17.2778 16.9863 15.6738C18.289 14.0698 19 12.0664 19 10L10 10"
        stroke="#151515"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Google;
