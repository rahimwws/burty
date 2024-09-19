import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Workouts = ({ size, fill }: { size: number; fill: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M15.9629 5.1089L8.00026 0.334229L0.0375977 5.1089L8.00026 9.88623L15.9629 5.1089ZM8.00026 1.88623L13.3709 5.1089L8.00026 8.33423L2.6296 5.1089L8.00026 1.88623Z"
        fill={fill}
      />
      <Path
        d="M16 9.31128L8 14.1113L0 9.31128V10.8666L8 15.6659L16 10.8666V9.31128Z"
        fill={fill}
      />
      <Path
        d="M16 6.42383L14.3233 7.42983L8 11.2238L1.67667 7.42983L0 6.42383V7.97849L8 12.7785L16 7.97849V6.42383Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Workouts;
