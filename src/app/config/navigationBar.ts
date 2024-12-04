import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

export const configureNavigationBar = () => {
  if (Platform.OS === "android") {
    NavigationBar.setVisibilityAsync("hidden");
  }
};
