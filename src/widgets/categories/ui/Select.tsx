import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import Checkbox from "@/shared/ui/CheckBox";

const Select = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.dark,
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 5,
      }}
    >
      <Typography>Category</Typography>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? colors.primary : undefined}
        style={{
          borderRadius: 5,
          borderColor: !isChecked ? colors.gray : colors.primary,
          backgroundColor: colors.background,
        }}
      />
    </View>
  );
};

export default Select;
