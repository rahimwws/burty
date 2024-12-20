import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Button = ({ title, onPress }: { title: string; onPress?: Function }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 12,
        paddingVertical: 9,
        backgroundColor: colors.dark,
        borderRadius: 3,
      }}
      onPress={() => {
        onPress?.();
      }}
    >
      <Typography
        align="left"
        styles={{ opacity: 0.5 }}
        color={"light"}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
