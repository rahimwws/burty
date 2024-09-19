import { View, Text } from "react-native";
import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

const Gallery = ({ size, fill }: { size: number; fill: string }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <G clip-path="url(#clip0_865_4834)">
        <Rect width={size} height={size} rx="12.5" />
        <Path
          d="M20.9303 2.08312C20.9303 1.89894 20.8572 1.7223 20.7269 1.59207C20.5967 1.46184 20.4201 1.38867 20.2359 1.38867H4.95812C4.77394 1.38867 4.5973 1.46184 4.46707 1.59207C4.33684 1.7223 4.26367 1.89894 4.26367 2.08312V2.77756H20.9303V2.08312Z"
          fill={fill}
        />
        <Path
          d="M22.3058 4.86095C22.3058 4.67677 22.2326 4.50014 22.1024 4.3699C21.9721 4.23967 21.7955 4.1665 21.6113 4.1665H3.55577C3.37159 4.1665 3.19496 4.23967 3.06473 4.3699C2.93449 4.50014 2.86133 4.67677 2.86133 4.86095V5.55539H22.3058V4.86095Z"
          fill={fill}
        />
        <Path
          d="M22.3053 6.94434H2.69423C2.34797 6.94434 2.0159 7.08189 1.77106 7.32672C1.52622 7.57156 1.38867 7.90364 1.38867 8.24989V20.9166C1.38867 21.2628 1.52622 21.5949 1.77106 21.8397C2.0159 22.0846 2.34797 22.2221 2.69423 22.2221H22.3053C22.6516 22.2221 22.9837 22.0846 23.2285 21.8397C23.4733 21.5949 23.6109 21.2628 23.6109 20.9166V8.24989C23.6109 7.90364 23.4733 7.57156 23.2285 7.32672C22.9837 7.08189 22.6516 6.94434 22.3053 6.94434ZM5.94423 9.34017C6.35627 9.34017 6.75906 9.46236 7.10166 9.69127C7.44427 9.92019 7.71129 10.2456 7.86897 10.6262C8.02666 11.0069 8.06791 11.4258 7.98753 11.8299C7.90714 12.2341 7.70872 12.6053 7.41737 12.8966C7.12601 13.188 6.75479 13.3864 6.35066 13.4668C5.94654 13.5472 5.52765 13.5059 5.14697 13.3483C4.76629 13.1906 4.44092 12.9235 4.212 12.5809C3.98308 12.2383 3.86089 11.8355 3.86089 11.4235C3.86089 10.871 4.08039 10.3411 4.47109 9.95036C4.86179 9.55966 5.39169 9.34017 5.94423 9.34017ZM20.8331 19.4443H4.16645L9.347 14.2568C9.43935 14.1652 9.56415 14.1138 9.69423 14.1138C9.8243 14.1138 9.9491 14.1652 10.0414 14.2568L12.597 16.8124L16.1178 13.1943C16.2102 13.1027 16.335 13.0513 16.4651 13.0513C16.5951 13.0513 16.7199 13.1027 16.8123 13.1943L20.8331 17.2152V19.4443Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_865_4834">
          <Rect width={size} height={size} rx="12.5" fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Gallery;
