import { View, Text } from "react-native";
import React, { useState } from "react";
import { LargeButton } from "@/shared/ui/Button";
import { FormField } from "@/shared/ui/FormField";
import { useNewPassword } from "../../lib/hooks/useNewPassword";

const NewPasswordService = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { mutate } = useNewPassword();

  const action = () => {
    if (password === confirmPassword) {
      mutate(password);
    }
  };
  return (
    <View
      style={{
        marginVertical: "5%",
      }}
    >
      <FormField
        label="Password"
        placeholder="********"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      <FormField
        label="Confirm Password"
        placeholder="********"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isPassword
      />

      <LargeButton text="Confirm" isRoute={false} action={action} />
    </View>
  );
};

export default NewPasswordService;
