import { TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import Checkbox from "@/shared/ui/CheckBox";
import styles from "./styles";

type SelectProps = {
  title: string
  /** @default false */
  isChecked?: boolean
  onPress?: (value: boolean) => void
}

const Select = ({
  isChecked = false,
  title,
  onPress,
}: SelectProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(!isChecked)}
      style={styles.card}
    >
      <Typography>{title}</Typography>
      <Checkbox
        value={isChecked}
        onValueChange={(value) => onPress?.(value)}
        color={isChecked ? colors.primary : undefined}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxActive,
        ]}
      />
    </TouchableOpacity>
  );
};

export default Select;
