import Index from "@/navigation";
import React, { useCallback, useEffect } from "react";
import { Platform } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { colors } from "@/shared/lib/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import Mapbox from "@rnmapbox/maps";
import * as NavigationBar from "expo-navigation-bar";
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    r: require("./assets/fonts/ProductSans-Regular.ttf"),
    l: require("./assets/fonts/ProductSans-Light.ttf"),
    m: require("./assets/fonts/ProductSans-Medium.ttf"),
    b: require("./assets/fonts/ProductSans-Bold.ttf"),
    black: require("./assets/fonts/ProductSans-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };
  Mapbox.setAccessToken(
    "pk.eyJ1IjoicmFoaW13d3MiLCJhIjoiY20weGNwZTFrMGJlNzJqcHNvMzQxN3pqayJ9.lxS8jNdIP0tFbscBre8ExQ"
  );
  const queryClient = new QueryClient();
  if (Platform.OS === "android") {
    NavigationBar.setVisibilityAsync("hidden");
  }
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <NavigationContainer theme={MyTheme}>
          <Index />
          <StatusBar style="light" />
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
