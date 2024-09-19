import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import OnBoardingList from "@/components/list/OnBoardingList";
import { LargeButton } from "@/shared/ui/Button";
import { StatusBar } from "expo-status-bar";

const Onboarding = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ScreenLayout
        styles={{
          alignItems: "center",
        }}
        showPx={false}
        pt={0}
        pb={0}
      >
        <OnBoardingList />
        <View
          style={{
            width: "100%",
            alignSelf: "flex-end",
            paddingHorizontal: 20,
            gap: 20,
            marginBottom: 10,
            position: "absolute",
            bottom: "2%",
          }}
        >
          <LargeButton
            text="Next"
            isRoute={true}
            route="Login"
            type="rounded"
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default Onboarding;
