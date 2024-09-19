import { View, Text } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const Support = () => {
  return (
    <ScreenLayout>
      <Header title="Help and support" type="stack" />
      <Typography
        size={22}
        font="b"
        styles={{ marginTop: "5%", marginBottom: 5 }}
        align="left"
      >
        We're here for you
      </Typography>
      <Typography font="m" color="gray" align="left">
        Monday - Friday: 8 AM - 8 PM
      </Typography>
      <Typography
        font="m"
        color="gray"
        align="left"
        styles={{ marginBottom: "3%" }}
      >
        Saturday & Sunday: 9 AM - 5 PM
      </Typography>
      <Typography font="m" align="left" styles={{ marginBottom: 5 }}>
        Phone
      </Typography>
      <View
        style={{
          width: "100%",
          height: 50,
          alignItems: "flex-start",
          paddingLeft: 10,
          justifyContent: "center",
          borderWidth: 1,
          borderColor: colors.dark,
          borderRadius: 10,
          borderTopRightRadius: 0,
        }}
      >
        <Typography font="m" align="left">
          02359 5123 5123
        </Typography>
      </View>
      <Typography font="m" align="left" styles={{ marginVertical: 5 }}>
        Email
      </Typography>
      <View
        style={{
          width: "100%",
          height: 50,
          alignItems: "flex-start",
          paddingLeft: 10,
          justifyContent: "center",
          borderWidth: 1,
          borderColor: colors.dark,
          borderRadius: 10,
          borderTopRightRadius: 0,
        }}
      >
        <Typography font="m" align="left">
          burty@support.com
        </Typography>
      </View>
      <View
        style={{
          width: "100%",
          height: "25%",
          backgroundColor: colors.dark,
          marginTop: "5%",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          size={22}
          font="b"
          styles={{ marginTop: "5%", marginBottom: 5 }}
        >
          Messangers
        </Typography>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            paddingHorizontal: 10,
            height: "50%",
            marginTop: "5%",
          }}
        >
          <View>
            <View
              style={{
                alignItems: "center",
                gap: 5,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: colors.primary,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
              <Typography styles={{ color: colors.light + "fff80" }}>
                WhatsApp
              </Typography>
            </View>
          </View>
          <View>
            <View
              style={{
                alignItems: "center",
                gap: 5,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: colors.primary,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
              <Typography styles={{ color: colors.light + "fff80" }}>
                WhatsApp
              </Typography>
            </View>
          </View>
          <View>
            <View
              style={{
                alignItems: "center",
                gap: 5,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: colors.primary,
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></View>
              <Typography styles={{ color: colors.light + "fff80" }}>
                WhatsApp
              </Typography>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default Support;
