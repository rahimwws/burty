import { colors } from "@/shared/lib/theme";
import { useEffect, useState } from "react";
import { Animated, View } from "react-native";

export const PasswordBar = ({
  strength,
}: {
  strength: "weak" | "medium" | "strong";
}) => {
  const [animationWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    let toValue = 0;

    switch (strength) {
      case "strong":
        toValue = 100;
        break;
      case "medium":
        toValue = 60;
        break;
      case "weak":
      default:
        toValue = 30;
        break;
    }

    Animated.timing(animationWidth, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [strength]);

  const getBarColor = () => {
    switch (strength) {
      case "strong":
        return colors.primary;
      case "medium":
        return colors.primary;
      case "weak":
        return colors.error;
    }
  };

  return (
    <View
      style={{
        height: 5,
        backgroundColor: colors.dark,
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 5,
      }}
    >
      <Animated.View
        style={{
          height: "100%",
          width: animationWidth.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
          }),
          backgroundColor: getBarColor(),
        }}
      />
    </View>
  );
};
