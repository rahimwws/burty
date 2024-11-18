import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { useAppNavigation } from "@/shared/lib/navigation";

const Button = ({ title, route }: { title: string; route?: string }) => {
  const [active, setActive] = useState<boolean>(false);
  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 12,
        paddingVertical: 9,
        backgroundColor: active ? colors.primary : colors.dark,
        borderRadius: 3,
      }}
      onPress={() => {
        setActive(!active);

        route && navigation.navigate(route);
      }}
    >
      <Typography
        align="left"
        styles={{ opacity: active ? 1 : 0.5 }}
        color={active ? "background" : "light"}
      >
        {title}
      </Typography>
    </TouchableOpacity>
  );
};

export default Button;
