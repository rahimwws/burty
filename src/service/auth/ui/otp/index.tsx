import { View, Text, Keyboard } from "react-native";
import React, { useEffect } from "react";
import OtpTextInput from "react-native-text-input-otp";
import { colors } from "@/shared/lib/theme";
import useUserIdStore from "../../model/stores/userId";
import { useVerify } from "../../lib/hooks/useVerify";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useVerifyPassword } from "../../lib/hooks/useForgotPassword";
import { useAppNavigation } from "@/shared/lib/navigation";
import { isAxiosError } from "axios";
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

  const { mutate } = useVerify(userId);
  const { mutate: VerifyPassword } = useVerifyPassword(userId);

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
    <View style={{ marginVertical: "5%" }}>
      <OtpTextInput
        otp={otp}
        setOtp={setOtp}
        digits={6}
        style={{
          borderRadius: 15,
          borderWidth: 1,
          borderColor: colors.gray,
          height: 105,
          color: colors.light,
          alignItems: "center",
          justifyContent: "center",
        }}
        fontStyle={{
          fontSize: 32,
          fontWeight: "bold",
          color: colors.light,
          fontFamily: "m",
        }}
        focusedStyle={{ borderColor: colors.primary }}
      />
    </View>
  );
};

export default OtpService;
