import React, { useEffect, useState, FC } from "react";
import { View } from "react-native";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useRegister } from "../../lib/hooks/useRegister";
import TopTabs from "@/components/tab/TopTabs";
import AuthError from "@/shared/ui/Error/AuthError";
import { LargeButton } from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { FormField } from "@/shared/ui/FormField";
import { CheckboxWithText } from "@/shared/ui/CheckBox/CheckBoxWithText";
import useRoleStore from "@/shared/store/role";

type UserType = "USER" | "MENTOR";
type StatusType = "error" | "success" | null;

const SignUpService: FC = () => {
  const { changeRole, role } = useRoleStore((store) => {
    return {
      changeRole: store.toggleRole,
      role: store.role,
    };
  });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [status, setStatus] = useState<StatusType>(null);
  const [isChecked, setIsChecked] = useState(false);

  const { mutate, isSuccess, errorMessage } = useRegister(
    email,
    password,
    role === "mentor" ? "MENTOR" : "USER"
  );
  const navigation = useAppNavigation();

  // Validate passwords before submitting
  const validateAndSubmit = () => {
    if (password !== confirmPassword) {
      setStatus("error");
      return;
    }
    if (isChecked) {
      mutate();
      // navigation.navigate("Login");
    }
  };

  useEffect(() => {
    if (isSuccess) navigation.navigate("Otp");
    if (errorMessage) setStatus("error");
  }, [isSuccess, errorMessage, navigation]);
  return (
    <>
      <TopTabs
        items={["User", "Mentor"]}
        onSelect={changeRole}
        line
        index={role === "user" ? 0 : 1}
      />

      {status === "error" && <AuthError text={errorMessage} />}

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

      <FormField
        label="Confirm Password"
        placeholder="********"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isPassword
      />

      <CheckboxWithText
        value={isChecked}
        onValueChange={setIsChecked}
        text="I agree to the User Agreement & confirm I am at least 18 years old"
      />

      <View style={{ marginVertical: "2%" }}>
        <LargeButton
          text="Sign Up"
          isRoute={false}
          action={validateAndSubmit}
        />
      </View>

      <Modal
        title="Registration successful!"
        description="A confirmation has been sent to your email. Please check your inbox and follow the instructions to complete your registration."
        rightText="Continue"
        visible={status === "success"}
        rightAction={() => {
          setStatus(null);
          navigation.navigate("Service");
        }}
        leftAction={() => setStatus(null)}
        leftText="Back"
      />
    </>
  );
};

export default SignUpService;
