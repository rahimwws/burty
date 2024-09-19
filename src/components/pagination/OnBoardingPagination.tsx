import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import { Slide } from "@/shared/config/slides";

const OnBoardingPagination = ({
  data,
  scrollX,
}: {
  data: Slide[];
  scrollX: any;
}) => {
  const { width, height } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: height * 0.35,
        marginBottom: 10,
      }}
    >
      {data.map((_, key: number) => {
        const inputRange = [(key - 1) * width, key * width, (key + 1) * width];

        const dotsWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 40, 8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotsWidth, opacity }]}
            key={key}
          />
        );
      })}
    </View>
  );
};

export default OnBoardingPagination;

const styles = StyleSheet.create({
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 8,
  },
});
