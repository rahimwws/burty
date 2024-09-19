import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import NewPasswordService from "@/service/auth/ui/new-password";

const NewPassword = () => {
  const { height } = Dimensions.get("window");
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require("@/shared/assets/images/bg.png")}
        style={{ flex: 1, marginTop: "-5%" }}
      >
        <ScreenLayout styles={{ backgroundColor: "transparent" }} pt={0}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "position" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -height * 0.15 : 0}
          >
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
            <Typography font="b" size={22}>
              New Password
            </Typography>
            <NewPasswordService />
          </KeyboardAvoidingView>
        </ScreenLayout>
      </ImageBackground>
    </>
  );
};

export default NewPassword;
