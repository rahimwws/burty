import React, { forwardRef, useImperativeHandle, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { colors } from "@/shared/lib/theme"; // Assuming you have a colors object
import Typography from "@/shared/ui/Typography";

export type DistanceBarRef = {
  getValue: () => number
  clearValue: () => void
}

const DistanceBar = forwardRef<DistanceBarRef, object>(({ }, ref) => {
  const [distance, setDistance] = useState(1); // Default value is 1 kilometer

  const handleOnValueChange = (value: number) => {
    const formattedDistance: number = +value.toFixed(1)
    setDistance(formattedDistance)
  }

  useImperativeHandle(ref, () => {
    return {
      getValue: () => {
        return distance;
      },
      clearValue: () => {
        setDistance(1);
      }
    }
  });

  return (
    <View style={styles.container}>
      <Typography align="left" size={18} font="b">
        Distance
      </Typography>
      <View style={styles.sliderContainer}>
        <Typography styles={{ color: colors.light + "fff80" }}>50m</Typography>

        <Slider
          style={styles.slider}
          minimumValue={0.05}
          maximumValue={15}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.dark}
          thumbTintColor={colors.primary}
          step={0.05}
          value={distance}
          onValueChange={(value) => handleOnValueChange(value)}
        />
        <Typography styles={{ color: colors.light + "fff80" }}>15km</Typography>
      </View>

      <Typography align="left" styles={{ color: colors.light + "fff80" }}>
        You will see gyms within a radius of {distance} kilometers
      </Typography>
    </View>
  );
});

export default DistanceBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },

  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },

  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
});
