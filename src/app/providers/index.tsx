import React, { ReactNode, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClientProvider } from "@tanstack/react-query";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { theme } from "../config/theme";
import { queryClient } from "../config/queryClient";
import { configureNavigationBar } from "../config/navigationBar";
import { configureMapbox } from "../config/mapbox";
import { ToastProvider } from "@/shared/ui/Toast";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { navigationRef } from "@/shared/lib/navigation";
import { StripeProvider } from "@stripe/stripe-react-native";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    r: require("~/assets/fonts/ProductSans-Regular.ttf"),
    l: require("~/assets/fonts/ProductSans-Light.ttf"),
    m: require("~/assets/fonts/ProductSans-Medium.ttf"),
    b: require("~/assets/fonts/ProductSans-Bold.ttf"),
    black: require("~/assets/fonts/ProductSans-Black.ttf"),
  });

  useEffect(() => {
    configureNavigationBar();
    configureMapbox();
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <StripeProvider
      publishableKey="pk_test_51QU6EmFAEI8CtSzf1o3Ad6YFizTfYPDhmpqy5xiWJ68Xi0nLc76BELHH7lEdR37EkCylQITFp9SbjKEGAaPJg9x400nUB8B0mB"
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <GestureHandlerRootView>
            <NavigationContainer theme={theme} ref={navigationRef}>
              <ToastProvider />
              {children}
            </NavigationContainer>
          </GestureHandlerRootView>
        </QueryClientProvider>
      </SafeAreaProvider>
    </StripeProvider>
  );
};
