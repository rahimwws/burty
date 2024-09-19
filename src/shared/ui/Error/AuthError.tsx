import { View, Text } from "react-native";
import React from "react";
import Typography from "../Typography";
import { colors } from "@/shared/lib/theme";
import ErrorSvg from "@/shared/assets/icons/interface/ErrorSvg";

const AuthError = ({ text }: { text: string | null }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 25,
        backgroundColor: colors.error + "4F",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 5,
      }}
    >
      <ErrorSvg />
      <Typography color="error" font="m">
        {text}
      </Typography>
    </View>
  );
};

export default AuthError;
