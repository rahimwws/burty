import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { colors } from "@/shared/lib/theme"; // Assuming you have a colors object
import Typography from "@/shared/ui/Typography";

const DistanceBar = () => {
  const [distance, setDistance] = useState(1); // Default value is 1 kilometer

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
          onValueChange={(value) => setDistance(value)}
        />
        <Typography styles={{ color: colors.light + "fff80" }}>15km</Typography>
      </View>

      <Typography align="left" styles={{ color: colors.light + "fff80" }}>
        You will see gyms within a radius of 1 kilometers
      </Typography>
    </View>
  );
};

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
