import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Typography from "@/shared/ui/Typography";
import Input from "@/shared/ui/Input";
import { LargeButton } from "@/shared/ui/Button";
import { useForgotPassword } from "../../lib/hooks/useForgotPassword";
import { useAppNavigation } from "@/shared/lib/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";

const ResetPasswordService = () => {
  const navigation = useAppNavigation();
  const [email, setEmail] = useState<string>("");
  const { mutate, isSuccess } = useForgotPassword();
  const action = () => {
    mutate(email);
  };
  useEffect(() => {
    if (isSuccess) navigation.navigate("Otp", { password: true });
  }, [isSuccess]);
  return (
    <>
      <View
        style={{
          marginVertical: "5%",
        }}
      >
        <Typography align="left" styles={{ marginBottom: 5, marginTop: "1%" }}>
          Email or Mobile Number
        </Typography>
        <Input
          placeholder="example@example.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <LargeButton text="Reset Password" isRoute={false} action={action} />
    </>
  );
};

export default ResetPasswordService;
