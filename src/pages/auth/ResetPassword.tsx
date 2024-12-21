import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Platform,
  Dimensions,
  ScrollView
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { ResetPasswordService } from "@/features/auth/";
import AuthTitle from "@/shared/ui/AuthTitle";

const ResetPassword = () => {
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
            <AuthTitle title="Reset Password" />
            <ResetPasswordService />
          </ScrollView>
        </ScreenLayout>
      </ImageBackground>
    </>
  );
};

export default ResetPassword;
