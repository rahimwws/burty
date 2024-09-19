import { FC, useEffect, useState } from "react";
import Input from "../Input";
import Typography from "../Typography";
import { PasswordBar } from "../Animation/PasswordBar";
import { checkPasswordStrength } from "@/shared/model/validation/checkingPassword";
import { Text } from "react-native";
import { colors } from "@/shared/lib/theme";
type FormFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
};
export const FormField: FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  isPassword = false,
}) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<
    "weak" | "medium" | "strong"
  >("weak");

  useEffect(() => {
    if (isPassword) {
      setPasswordStrength(checkPasswordStrength(value));
    }
  }, [value]);
  return (
    <>
      <Typography align="left" styles={{ marginVertical: 5 }}>
        {label}
      </Typography>
      <Input
        placeholder={placeholder}
        password={isPassword}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {
          if (isPassword) setShowAnimation(true);
        }}
      />
      {isPassword && showAnimation && (
        <>
          <PasswordBar strength={passwordStrength} />
          <Typography
            size={14}
            font="b"
            align="left"
            styles={{
              color:
                passwordStrength === "strong"
                  ? colors.primary
                  : passwordStrength === "medium"
                  ? colors.primary
                  : colors.error,
              marginTop: 5,
            }}
          >
            {passwordStrength === "strong"
              ? "Strong"
              : passwordStrength === "medium"
              ? "Medium"
              : "Password is too weak"}
          </Typography>
        </>
      )}
    </>
  );
};
