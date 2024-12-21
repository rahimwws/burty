import { View, ImageBackground, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import { OtpService } from "@/features/auth/";
import { LargeButton } from "@/shared/ui/Button";
import { RouteProp, useRoute } from "@react-navigation/native";
import AuthTitle from "@/shared/ui/AuthTitle";

type RouteParams = {
  filters: {
    fromPageName?: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "filters">;


const Otp = () => {
  const route = useRoute<MyScreenRouteProp>();
  const { height } = Dimensions.get("window");

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require("@/shared/assets/images/bg.png")}
        style={{ flex: 1, marginTop: "-5%" }}
      >
        <ScreenLayout styles={{ backgroundColor: "transparent" }} pt={0}>
          <ScrollView>
            <Image
              source={require("@/shared/assets/images/logo.png")}
              style={{ width: 300, alignSelf: "center", marginTop: "-5%" }}
              resizeMode="contain"
            />
            <Typography styles={{ marginTop: "-20%" }} align="center">
              Welcome to our sports venue booking app! Please register or log in
              to enjoy all the features.
            </Typography>
            <Image
              source={require("@/shared/assets/images/app-logo.png")}
              style={{ width: 155, height: 200, alignSelf: "center" }}
              resizeMode="contain"
            />
            <AuthTitle title={route.params?.fromPageName || 'Otp'} />
            <OtpService />
          </ScrollView>
        </ScreenLayout>
      </ImageBackground>
    </>
  );
};

export default Otp;
