import {
  View,
  Text,
  TextInput,
  StyleProp,
  TextStyle,
  KeyboardType,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "@/shared/lib/theme";
import Eyes from "@/shared/assets/icons/interface/Eyes";

const Input = ({
  placeholder,
  styles,
  type = "default",
  password = false,
  onChangeText,
  action,
  value,
  onFocus,
}: {
  placeholder: string;
  styles?: StyleProp<TextStyle>;
  type?: KeyboardType;
  password?: boolean;
  onChangeText?: (text: string) => void;
  action?: any;
  value: string;
  onFocus?: () => void;
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    !password
  );

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          width: "100%",
          height: 55,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: 10,
          backgroundColor: colors.input,
        },
        styles,
      ]}
    >
      <TextInput
        maxLength={1000}
        autoCapitalize="none"
        placeholder={placeholder}
        style={{
          height: 50,
          width: "90%",
          paddingHorizontal: 15,
          fontFamily: "m",
          fontSize: 16,
          color: colors.light,
        }}
        keyboardType={type}
        secureTextEntry={!isPasswordVisible}
        onChangeText={onChangeText}
        onEndEditing={action}
        placeholderTextColor={colors.gray}
        value={value}
        onFocus={onFocus}
      />
      {password && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          activeOpacity={0.8}
        >
          <Eyes show={isPasswordVisible} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
