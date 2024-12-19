import { View, Text, Keyboard, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import OtpTextInput from "react-native-text-input-otp";
import { colors } from "@/shared/lib/theme";
import useUserIdStore from "../../model/stores/userId";
import { useVerify } from "../../lib/hooks/useVerify";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useVerifyPassword } from "../../lib/hooks/useForgotPassword";
import { useAppNavigation } from "@/shared/lib/navigation";
import { isAxiosError } from "axios";
import styles from "./styles";
import { LargeButton } from "@/shared/ui/Button";
type RouteParams = {
  MyScreen: {
    password: boolean;
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const OtpService = () => {
  const navigation = useAppNavigation();
  const route = useRoute<MyScreenRouteProp>();

  const [otp, setOtp] = React.useState<string>("");
  const userId = useUserIdStore((store) => store.id);

  const { mutate, isPending } = useVerify(userId);
  const { mutate: VerifyPassword, isPending: isVerifyingPassword } = useVerifyPassword(userId);

  const action = () => {
    if (!route.params?.password)
      mutate(otp, { onSuccess: () => navigation.navigate("Service") });
    else
      VerifyPassword(otp, {
        onSuccess: (data) => {
          console.log(data.data);
          navigation.navigate("NewPassword");
        },
        onError: (err) => {
          if (isAxiosError(err)) alert(err.response?.data.message);
        },
      });
  };
  useEffect(() => {
    if (otp.length === 6) {
      Keyboard.dismiss();
      action();
    }
  }, [otp]);
  return (
    <>
      <View style={{ marginVertical: "5%" }}>
        <OtpTextInput
          otp={otp}
          setOtp={setOtp}
          digits={6}
          style={styles.otp}
          fontStyle={styles.otpFont}
          focusedStyle={{ borderColor: colors.primary }}
        />
      </View>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 10,
        }}
      >
        <LargeButton text="Confirm" isRoute={false} isLoading={isPending || isVerifyingPassword} />
      </View>
    </>
  );
};


export default OtpService;
