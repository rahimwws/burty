import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import StepIndicator from "@/components/pagination/StepIndicator";
import { Calendar } from "@/widgets/calendar";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { TouchableOpacity, View } from "react-native";
import { LargeButton } from "@/shared/ui/Button";

const BookTime = () => {
  const times = [
    "14:00-15:00",
    "16:00-17:00",
    "18:00-19:00",
    "19:00-20:00",
    "21:00-22:00",
  ];
  const [time, setTime] = useState<string>("14:00-15:00");
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title="Book workout" type="stack" />
        <StepIndicator currentStep={1} steps={3} />
        <Calendar />
        <Typography
          styles={{ marginTop: "3%", marginBottom: "1%" }}
          align="left"
          size={18}
          font="b"
        >
          Time
        </Typography>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {times.map((tag, index) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: time === tag ? colors.light : colors.dark,
                  padding: 10,
                  borderRadius: 5,
                }}
                key={index}
                onPress={() => setTime(tag)}
              >
                <Typography color={time === tag ? "background" : "gray"}>
                  {tag}
                </Typography>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "3%",
          }}
        >
          <Typography align="left" size={18} font="b">
            Total
          </Typography>
          <Typography align="right" size={22} font="black">
            $100
          </Typography>
        </View>
        <LargeButton
          text="Select days/time"
          isRoute
          route="BookBuy"
          type="rounded"
          bg={colors.blue}
          textColor="light"
        />
      </View>
    </ScreenLayout>
  );
};

export default BookTime;
