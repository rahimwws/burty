import { View, Text } from "react-native";
import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

const Pass = ({ size, fill }: { size: number; fill: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_248_1260)">
        <Path
          d="M12.6667 14.6673H3.33333C2.4496 14.6663 1.60237 14.3147 0.97748 13.6898C0.352588 13.0649 0.00105857 12.2177 0 11.334L0 4.66732C0.00105857 3.78359 0.352588 2.93636 0.97748 2.31146C1.60237 1.68657 2.4496 1.33504 3.33333 1.33398H12.6667C13.5504 1.33504 14.3976 1.68657 15.0225 2.31146C15.6474 2.93636 15.9989 3.78359 16 4.66732V11.334C15.9989 12.2177 15.6474 13.0649 15.0225 13.6898C14.3976 14.3147 13.5504 14.6663 12.6667 14.6673ZM3.33333 2.66732C2.8029 2.66732 2.29419 2.87803 1.91912 3.2531C1.54405 3.62818 1.33333 4.13688 1.33333 4.66732V11.334C1.33333 11.8644 1.54405 12.3731 1.91912 12.7482C2.29419 13.1233 2.8029 13.334 3.33333 13.334H12.6667C13.1971 13.334 13.7058 13.1233 14.0809 12.7482C14.456 12.3731 14.6667 11.8644 14.6667 11.334V4.66732C14.6667 4.13688 14.456 3.62818 14.0809 3.2531C13.7058 2.87803 13.1971 2.66732 12.6667 2.66732H3.33333Z"
          fill={fill}
        />
        <Path
          d="M12.6665 8.66733H7.33317C7.15636 8.66733 6.98679 8.59709 6.86177 8.47206C6.73674 8.34704 6.6665 8.17747 6.6665 8.00065C6.6665 7.82384 6.73674 7.65427 6.86177 7.52925C6.98679 7.40422 7.15636 7.33398 7.33317 7.33398H12.6665C12.8433 7.33398 13.0129 7.40422 13.1379 7.52925C13.2629 7.65427 13.3332 7.82384 13.3332 8.00065C13.3332 8.17747 13.2629 8.34704 13.1379 8.47206C13.0129 8.59709 12.8433 8.66733 12.6665 8.66733Z"
          fill={fill}
        />
        <Path
          d="M4.6665 8.66733H3.33317C3.15636 8.66733 2.98679 8.59709 2.86177 8.47206C2.73674 8.34704 2.6665 8.17747 2.6665 8.00065C2.6665 7.82384 2.73674 7.65427 2.86177 7.52925C2.98679 7.40422 3.15636 7.33398 3.33317 7.33398H4.6665C4.84331 7.33398 5.01288 7.40422 5.1379 7.52925C5.26293 7.65427 5.33317 7.82384 5.33317 8.00065C5.33317 8.17747 5.26293 8.34704 5.1379 8.47206C5.01288 8.59709 4.84331 8.66733 4.6665 8.66733Z"
          fill={fill}
        />
        <Path
          d="M8.6665 11.9994H3.33317C3.15636 11.9994 2.98679 11.9291 2.86177 11.8041C2.73674 11.6791 2.6665 11.5095 2.6665 11.3327C2.6665 11.1559 2.73674 10.9863 2.86177 10.8613C2.98679 10.7363 3.15636 10.666 3.33317 10.666H8.6665C8.84331 10.666 9.01288 10.7363 9.13791 10.8613C9.26293 10.9863 9.33317 11.1559 9.33317 11.3327C9.33317 11.5095 9.26293 11.6791 9.13791 11.8041C9.01288 11.9291 8.84331 11.9994 8.6665 11.9994Z"
          fill={fill}
        />
        <Path
          d="M12.6665 11.9994H11.3332C11.1564 11.9994 10.9868 11.9291 10.8618 11.8041C10.7367 11.6791 10.6665 11.5095 10.6665 11.3327C10.6665 11.1559 10.7367 10.9863 10.8618 10.8613C10.9868 10.7363 11.1564 10.666 11.3332 10.666H12.6665C12.8433 10.666 13.0129 10.7363 13.1379 10.8613C13.2629 10.9863 13.3332 11.1559 13.3332 11.3327C13.3332 11.5095 13.2629 11.6791 13.1379 11.8041C13.0129 11.9291 12.8433 11.9994 12.6665 11.9994Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_248_1260">
          <Rect width="16" height="16" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Pass;
