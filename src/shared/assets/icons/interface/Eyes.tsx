import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { colors } from "@/shared/lib/theme";

const Eyes = ({
  show,
  size,
  color = colors.light,
}: {
  show: boolean;
  size: number;
  color?: string;
}) => {
  if (show) {
    return (
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M12.9833 10C12.9833 11.65 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.65 7.0166 10C7.0166 8.35 8.34993 7.01666 9.99993 7.01666C11.6499 7.01666 12.9833 8.35 12.9833 10Z"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.0001 16.8916C12.9418 16.8916 15.6834 15.1583 17.5918 12.1583C18.3418 10.9833 18.3418 9.00831 17.5918 7.83331C15.6834 4.83331 12.9418 3.09998 10.0001 3.09998C7.05845 3.09998 4.31678 4.83331 2.40845 7.83331C1.65845 9.00831 1.65845 10.9833 2.40845 12.1583C4.31678 15.1583 7.05845 16.8916 10.0001 16.8916Z"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  } else {
    return (
      <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <Path
          d="M12.1083 7.89166L7.8916 12.1083C7.34994 11.5667 7.0166 10.825 7.0166 10C7.0166 8.35 8.34994 7.01666 9.99994 7.01666C10.8249 7.01666 11.5666 7.35 12.1083 7.89166Z"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.8501 4.80834C13.3918 3.70834 11.7251 3.10834 10.0001 3.10834C7.05845 3.10834 4.31678 4.84167 2.40845 7.84167C1.65845 9.01667 1.65845 10.9917 2.40845 12.1667C3.06678 13.2 3.83345 14.0917 4.66678 14.8083"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.0166 16.275C7.9666 16.675 8.97493 16.8917 9.99993 16.8917C12.9416 16.8917 15.6833 15.1583 17.5916 12.1583C18.3416 10.9833 18.3416 9.00834 17.5916 7.83334C17.3166 7.4 17.0166 6.99167 16.7083 6.60834"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.925 10.5833C12.7083 11.7583 11.75 12.7166 10.575 12.9333"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.89175 12.1083L1.66675 18.3333"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.3334 1.66669L12.1084 7.89169"
          stroke={color}
          strokeWidth="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  }
};

export default Eyes;
