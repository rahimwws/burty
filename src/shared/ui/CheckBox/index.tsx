import React from "react";
import { StyleSheet, Image, Pressable, Platform } from "react-native";

import Correct from "@/shared/assets/icons/interface/Correct";
import { CheckboxProps } from "expo-checkbox";
export default function Checkbox({
  color,
  disabled,
  onChange,
  onValueChange,
  style,
  value,
  ...other
}: CheckboxProps) {
  const handleChange = () => {
    onValueChange?.(!value);
  };

  return (
    <Pressable
      {...other}
      disabled={disabled}
      // Announces "checked" status and "checkbox" as the focused element
      accessibilityRole="checkbox"
      accessibilityState={{ disabled, checked: value }}
      style={[
        styles.root,
        style,
        value && styles.checked,
        !!color && {
          backgroundColor: value ? color : undefined,
          borderColor: color,
        },
        disabled && styles.disabled,
        value && disabled && styles.checkedAndDisabled,
      ]}
      onPress={handleChange}
    >
      {value && <Correct size={15} />}
    </Pressable>
  );
}

const defaultEnabledColor = Platform.select({
  ios: "#007AFF",
  android: "#009688",
});
const defaultGrayColor = "#657786";
const disabledGrayColor = "#CCD6DD";
const disabledCheckedGrayColor = "#AAB8C2";

const styles = StyleSheet.create({
  root: {
    height: 20,
    width: 20,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: defaultGrayColor,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: defaultEnabledColor,
    borderColor: defaultEnabledColor,
  },
  disabled: {
    borderColor: disabledGrayColor,
    backgroundColor: "transparent",
  },
  checkedAndDisabled: {
    backgroundColor: disabledCheckedGrayColor,
    borderColor: disabledCheckedGrayColor,
  },
});
