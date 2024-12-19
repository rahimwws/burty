import { FC } from "react";
import Checkbox from ".";
import { View } from "react-native-animatable";
import Typography from "../Typography";
import { colors } from "@/shared/lib/theme";
import { TouchableOpacity } from "react-native";

type CheckboxWithTextProps = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  text: string;
};

export const CheckboxWithText: FC<CheckboxWithTextProps> = ({
  onValueChange,
  text,
  value,
}) => (
  <TouchableOpacity onPress={() => onValueChange(!value)} style={{ flexDirection: "row", marginVertical: "3%" }}>
    <Checkbox
      value={value}
      onValueChange={onValueChange}
      color={value ? colors.primary : undefined}
      style={{ borderRadius: 5, borderColor: "#FFFFFF80" }}
    />
    <Typography
      color="light"
      styles={{ marginLeft: 10 }}
      align="left"
      size={14}
    >
      {text}
    </Typography>
  </TouchableOpacity>
);
