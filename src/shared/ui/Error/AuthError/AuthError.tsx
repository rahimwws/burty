import { View } from "react-native";
import React from "react";
import Typography from "../../Typography";
import ErrorSvg from "@/shared/assets/icons/interface/ErrorSvg";
import styles from "./styles";

const AuthError = ({ text }: { text: string | null }) => {
  return (
    <View
      style={styles.error}
    >
      <ErrorSvg />
      <Typography color="error" font="m">
        {text}
      </Typography>
    </View>
  );
};

export default AuthError;
