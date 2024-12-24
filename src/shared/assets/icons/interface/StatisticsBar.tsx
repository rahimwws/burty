import { Path, Svg } from "react-native-svg";

const StatisticsIcon = ({ size, fill }: { size: number; fill: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 16" fill="none">
      <Path
        d="M0 6.4H4V16H0V6.4ZM5 0H9V16H5V0ZM10 3.2H14V16H10V3.2Z"
        fill={fill}
      />
    </Svg>
  );
};

export default StatisticsIcon;