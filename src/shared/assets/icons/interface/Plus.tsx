import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Plus = ({ size }: { size: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9 0C8.58579 0 8.25 0.335787 8.25 0.75V8.25H0.75C0.335786 8.25 0 8.58579 0 9C0 9.41421 0.335787 9.75 0.75 9.75H8.25V17.25C8.25 17.6642 8.58579 18 9 18C9.41421 18 9.75 17.6642 9.75 17.25V9.75H17.25C17.6642 9.75 18 9.41421 18 9C18 8.58579 17.6642 8.25 17.25 8.25H9.75V0.75C9.75 0.335786 9.41421 0 9 0Z"
        fill="black"
      />
    </Svg>
  );
};

export default Plus;
