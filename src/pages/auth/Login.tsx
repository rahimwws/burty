import {
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import ScreenLayout from "@/shared/ui/Layout";
import LoginService from "@/service/auth/ui/login";

const Login = () => {
  const { height } = Dimensions.get("window");
  return (
    <ImageBackground
      source={require("@/shared/assets/images/bg.png")}
      style={{ flex: 1, marginTop: "-5%" }}
    >
      <ScreenLayout styles={{ backgroundColor: "transparent" }} pt={0}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "position" : "height"}
          keyboardVerticalOffset={-height * 0.15}
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
          <LoginService />
        </KeyboardAvoidingView>
      </ScreenLayout>
    </ImageBackground>
  );
};

export default Login;
