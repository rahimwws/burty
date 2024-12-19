import React, { useEffect, useState, FC } from "react";
import { View } from "react-native";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useRegister } from "../lib/hooks/useRegister";
import TopTabs from "@/components/tab/TopTabs";
import AuthError from "@/shared/ui/Error/AuthError";
import { LargeButton } from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { FormField } from "@/shared/ui/FormField";
import { CheckboxWithText } from "@/shared/ui/CheckBox/CheckBoxWithText";
import useRoleStore from "@/shared/store/role";
import isEmail from "@/utils/validators/isEmail";

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

  const { mutate, isSuccess, errorMessage, setError, isPending } = useRegister(
    email,
    password,
    role === "mentor" ? "MENTOR" : "USER"
  );
  const navigation = useAppNavigation();

  // Validate before submitting
  const validateAndSubmit = () => {
    if (!isEmail(email)) {
      setStatus("error");
      setError("Email address should be valid");
      return;
    }
    if (password !== confirmPassword) {
      setStatus("error");
      setError("Password does not match with confirm password")
      return;
    }
    if (!isChecked) {
      setStatus("error");
      setError("Agree to the user agreement and confirm that you are 18 years of age or older")
      return;
      // navigation.navigate("Login");  # TODO line 96 question
    }
    mutate();
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
          // isRoute={true}
          action={validateAndSubmit}  // TODO What after registartion?
          isLoading={isPending}
        // route="Service"
        // temporary
        />
      </View>

    </>
  );
};

export default SignUpService;
