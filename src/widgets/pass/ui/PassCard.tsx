import { View, Text, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import More from "@/shared/assets/icons/interface/More";
import Modal from "@/shared/ui/Modal";
import { DarkButton } from "@/shared/ui/Button";
import QRCode from "react-native-qrcode-svg";
import useUserPass from "@/widgets/profile/lib/hooks/useUserPass";

const PassCard = () => {
  const [showQr, setShowQr] = useState<boolean>(false);

  const {
    data: passData,
    isLoading: passDataLoading,
  } = useUserPass();

  if (passDataLoading)
    return (
      <View style={{ marginVertical: '10%' }}>
        <ActivityIndicator color={colors.primary} />
      </View>
    )

  return (
    <View
      style={{
        width: "90%",
        height: "70%",
        backgroundColor: "#3B3B3B",
        borderRadius: 15,
        marginTop: "10%",
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <View
          style={{
            padding: 5,
            backgroundColor: colors.dark,
            borderRadius: 5,
          }}
        >
          <Typography size={14} font="m">
            Valid until 22.08.2024
          </Typography>
        </View> */}
        <View
          style={{
            padding: 5,
            backgroundColor: colors.dark,
            borderRadius: 5,
          }}
        >
          <Typography size={14} font="m">
            Your pass
          </Typography>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
          }}
          onPress={() => setShowQr(true)}
        >
          <More />
        </TouchableOpacity>
      </View>
      <Image
        source={require("@/shared/assets/images/logo.png")}
        style={{
          width: 250,
          alignSelf: "flex-start",
          marginTop: "-5%",
          position: "absolute",
          left: 10,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          marginBottom: 10,
          marginHorizontal: 10,
        }}
      >
        {/* <Typography size={18} font="black">
          Monthly Pass
        </Typography> */}
        <Typography font="m" color="primary">
          Active
        </Typography>
      </View>
      <Modal custom={{ width: "100%" }} visible={showQr}>
        <Typography
          size={22}
          font="black"
          styles={{
            marginVertical: "5%",
          }}
        >
          QR-CODE
        </Typography>
        <QRCode
          value={passData?.data.userId}
          size={200}
        />
        <View style={{
          marginVertical: '5%',
          width: '100%',
        }}>
          <DarkButton text="Close" action={() => setShowQr(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default PassCard;
