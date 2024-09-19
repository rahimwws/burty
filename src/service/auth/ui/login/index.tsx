import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Typography from "@/shared/ui/Typography";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import Google from "@/shared/assets/icons/social/Google";
import Facebook from "@/shared/assets/icons/social/Facebook";
import AuthError from "@/shared/ui/Error/AuthError";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useLogin } from "../../lib/hooks/useLogin";
import { FormField } from "@/shared/ui/FormField";

const LoginService = () => {
  const navigation = useAppNavigation();
  const [error, setError] = useState<string | false>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { mutate, isSuccess, errorMessage } = useLogin(email, password);
  const action = () => {
    mutate();
  };
  useEffect(() => {
    if (isSuccess) navigation.navigate("Service");
    if (errorMessage) setError(errorMessage);
  }, [isSuccess]);
  return (
    <View>
      {error ? (
        <AuthError text={error} />
      ) : (
        <View style={{ height: 25 }}></View>
      )}
      <FormField
        label="Email"
        placeholder="example@example.com"
        value={email}
        onChangeText={setEmail}
      />

      <FormField
        label="Password"
        placeholder="********"
        value={password}
        onChangeText={setPassword}
        isPassword
      />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Typography
          align="right"
          styles={{ marginVertical: 10 }}
          color="primary"
        >
          Forgot Password?
        </Typography>
      </TouchableOpacity>

      <LargeButton text="Log in" isRoute={false} action={action} />
      <Typography styles={{ marginVertical: 10 }}>or sign up with</Typography>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Google />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Facebook />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Typography styles={{ marginTop: 10 }}>
          Don’t have an account?
          <Typography color="primary">Sign Up</Typography>
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default LoginService;
