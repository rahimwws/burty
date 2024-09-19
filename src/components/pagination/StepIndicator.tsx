import { colors } from "@/shared/lib/theme";
import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from "react-native";

interface StepIndicatorProps {
  currentStep: number; // Current active step
  steps: number; // Total number of steps
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
}) => {
  const { width } = Dimensions.get("window");

  const renderSteps = () => {
    const stepElements = [];

    for (let i = 0; i < steps; i++) {
      const isActive = i <= currentStep;

      stepElements.push(
        <View key={`step-${i}`} style={styles.stepContainer}>
          {i !== 0 && (
            <View
              style={[
                styles.line,
                {
                  backgroundColor: isActive ? colors.primary : "#777",
                  width: width / 3,
                }, // Active or inactive line
              ]}
            />
          )}

          {/* Step circle */}
          <View
            style={[
              styles.circleOuter,
              { borderColor: isActive ? colors.primary : "#777" }, // Active or inactive outer circle
            ]}
          >
            <View
              style={[
                styles.circleInner,
                { backgroundColor: isActive ? colors.primary : "#000" }, // Active or inactive inner circle
              ]}
            />
          </View>

          {/* Line after the step */}
          {i !== steps - 1 && (
            <View
              style={[
                styles.line,
                { backgroundColor: i < currentStep ? colors.primary : "#777" }, // Active or inactive line
              ]}
            />
          )}
        </View>
      );
    }

    return stepElements;
  };

  return <View style={styles.container}>{renderSteps()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    width: "100%",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleOuter: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  circleInner: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  line: {
    height: 1.5,
  },
});

export default StepIndicator;
