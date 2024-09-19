import { View, TextInput } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Price = () => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const handleFromTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setFromValue(numericValue ? `${numericValue}$` : "");
  };

  const handleToTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setToValue(numericValue ? `${numericValue}$` : "");
  };

  return (
    <View style={{ marginVertical: "5%" }}>
      <Typography size={18} font="b" align="left">
        Price
      </Typography>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "48%", marginVertical: "2%" }}>
          <Typography
            align="left"
            styles={{ color: colors.light + "fff80", marginBottom: 5 }}
          >
            From
          </Typography>
          <TextInput
            style={styles.input}
            value={fromValue}
            onChangeText={handleFromTextChange}
            maxLength={5}
            keyboardType="numeric"
          />
        </View>

        <View style={{ width: "48%", marginVertical: "2%" }}>
          <Typography
            align="left"
            styles={{ color: colors.light + "fff80", marginBottom: 5 }}
          >
            To
          </Typography>
          <TextInput
            style={styles.input}
            value={toValue}
            onChangeText={handleToTextChange}
            maxLength={5}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};
const styles = {
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.dark,
    paddingHorizontal: 10,
    color: colors.light,
    fontFamily: "m",
    fontSize: 18,
  },
};

export default Price;
