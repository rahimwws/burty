import React from "react";
import { Path, Svg } from "react-native-svg";

const Share = ({ size, fill }: { size: number; fill: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 14" fill="none">
      <Path
        d="M9.75819 4.0975H8.39352C8.11752 4.0975 7.89352 4.32117 7.89352 4.5975C7.89352 4.87383 8.11752 5.0975 8.39352 5.0975H9.75852C10.0342 5.0975 10.2585 5.32183 10.2585 5.5975V12.1362C10.2585 12.4118 10.0342 12.6362 9.75852 12.6362H2.24219C1.96652 12.6362 1.74219 12.4118 1.74219 12.1362V5.5975C1.74219 5.32183 1.96652 5.0975 2.24219 5.0975H3.60719C3.88352 5.0975 4.10719 4.87383 4.10719 4.5975C4.10719 4.32117 3.88352 4.0975 3.60719 4.0975H2.24219C1.41519 4.0975 0.742188 4.7705 0.742188 5.5975V12.1362C0.742188 12.9632 1.41519 13.6362 2.24219 13.6362H9.75852C10.5855 13.6362 11.2585 12.9632 11.2585 12.1362V5.5975C11.2582 4.77017 10.5855 4.0975 9.75819 4.0975ZM4.13585 3.08817L5.51685 1.70717V8.28983C5.51685 8.56583 5.74052 8.78983 6.01685 8.78983C6.29319 8.78983 6.51685 8.56583 6.51685 8.28983V1.70717L7.89785 3.08817C7.99552 3.18583 8.12352 3.2345 8.25152 3.2345C8.37952 3.2345 8.50752 3.18583 8.60519 3.08817C8.80052 2.89317 8.80052 2.57617 8.60519 2.38117L6.37085 0.1465C6.17519 -0.0488333 5.85885 -0.0488333 5.66352 0.1465L3.42885 2.38117C3.23352 2.57617 3.23352 2.89317 3.42885 3.08817C3.62419 3.2835 3.94052 3.2835 4.13585 3.08817Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Share;
