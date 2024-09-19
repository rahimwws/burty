import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const innerDimension = 230;
const scanLineHeight = 5;
const borderRadius = 20;

export const Overlay = () => {
  const linePosition = useSharedValue(0);

  useEffect(() => {
    linePosition.value = withRepeat(
      withTiming(innerDimension - scanLineHeight, {
        duration: 2000,
      }),
      -1,
      true
    );
  }, [linePosition]);

  // Reanimated style for the scanning line
  const animatedLineStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: linePosition.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.scannerBox}>
        <View style={[styles.corner, styles.topLeftCorner]} />
        <View style={[styles.corner, styles.topRightCorner]} />
        <View style={[styles.corner, styles.bottomLeftCorner]} />
        <View style={[styles.corner, styles.bottomRightCorner]} />
        <Animated.View style={[styles.scanLine, animatedLineStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scannerBox: {
    width: innerDimension,
    height: innerDimension,
    position: "relative",
    overflow: "hidden", // Скрывает линию за пределами бокса
  },
  corner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "gray",
    borderWidth: 4,
  },
  topLeftCorner: {
    top: 0,
    left: 0,
    borderTopLeftRadius: borderRadius,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRightCorner: {
    top: 0,
    right: 0,
    borderTopRightRadius: borderRadius,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeftCorner: {
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: borderRadius,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  bottomRightCorner: {
    bottom: 0,
    right: 0,
    borderBottomRightRadius: borderRadius,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  scanLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: scanLineHeight,
    backgroundColor: "#00FF00", // Зелёная линия
    borderRadius: 10,
  },
});
