import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Price = () => {
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");

  const handleFromTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setFromValue(numericValue);
  };

  const handleToTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setToValue(numericValue);
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
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={fromValue}
              onChangeText={handleFromTextChange}
              maxLength={5}
              keyboardType="numeric"
            />
            <Typography styles={styles.currencySymbol}>$</Typography>
          </View>
        </View>

        <View style={{ width: "48%", marginVertical: "2%" }}>
          <Typography
            align="left"
            styles={{ color: colors.light + "fff80", marginBottom: 5 }}
          >
            To
          </Typography>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={toValue}
              onChangeText={handleToTextChange}
              maxLength={5}
              keyboardType="numeric"
            />
            <Typography styles={styles.currencySymbol}>$</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.dark,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "black",
  },
  input: {
    flex: 1,
    color: colors.light,
    fontFamily: "m",
    fontSize: 18,
    textAlign: "center",
  },
  currencySymbol: {
    marginLeft: 5,
    color: colors.light,
    fontFamily: "m",
    fontSize: 18,
  },
});

export default Price;
