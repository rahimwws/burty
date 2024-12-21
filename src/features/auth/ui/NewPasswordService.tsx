import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { LargeButton } from "@/shared/ui/Button";
import { FormField } from "@/shared/ui/FormField";
import { useNewPassword } from "../lib/hooks/useNewPassword";
import { AuthError } from "@/shared/ui/Error";
import { useAppNavigation } from "@/shared/lib/navigation";
import AuthTitle from "@/shared/ui/AuthTitle";

const NewPasswordService = () => {
  const navigation = useAppNavigation();
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { mutate, isSuccess, isPending, errorMessage, } = useNewPassword();

  const action = () => {
    if (!password.trim()) {
      setError("Password should not be empty")
      return;
    }
    if (password !== confirmPassword) {
      setError("Password does not match with confirm password")
      return;
    }

    setError(null);
    mutate(password);
  };

  useEffect(() => {
    if (isSuccess) navigation.navigate("Login");
    if (errorMessage) setError(errorMessage);
  }, [errorMessage]);

  return (
    <View
      style={{
        marginVertical: "5%",
      }}
    >
      {error && <AuthError text={error} />}

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

      <View style={{ marginVertical: "4%" }}>
        <LargeButton text="Confirm" isRoute={false} action={action} isLoading={isPending} />
      </View>
    </View>
  );
};

export default NewPasswordService;
