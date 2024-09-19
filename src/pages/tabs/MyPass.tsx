import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { colors } from "@/shared/lib/theme";
import { PassCard, PassDetail } from "@/widgets/pass";

const MyPass = () => {
  return (
    <ScreenLayout pt={0} px={0}>
      <View
        style={{
          width: "100%",
          height: "35%",
          backgroundColor: colors.dark,
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PassCard />
      </View>
      <PassDetail />
    </ScreenLayout>
  );
};

export default MyPass;
