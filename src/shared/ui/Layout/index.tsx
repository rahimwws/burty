import { colors } from "@/shared/lib/theme";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface ScreenLayoutProps {
  children: React.ReactNode;
  px?: number;
  styles?: StyleProp<ViewStyle>;
  showPx?: boolean;
  pt?: number;
  pb?: number;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  px = 10,
  styles,
  showPx = true,
  pt,
  pb,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: showPx ? px : 0,
          paddingTop: pt ?? insets.top,
          paddingBottom: pb ?? insets.bottom,
        },
        styles as Object,
      ]}
    >
      {children}
    </View>
  );
};

export default ScreenLayout;
