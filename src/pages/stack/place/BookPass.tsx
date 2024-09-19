import { View, Text } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import StepIndicator from "@/components/pagination/StepIndicator";
import Typography from "@/shared/ui/Typography";
import { PassTypes } from "@/widgets/filter/model/types";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";

const BookPass = () => {
  const [type, setType] = useState<string>("Single");
  const [team, setTeam] = useState<number>(1);
  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title="Book workout" type="stack" />
        <StepIndicator currentStep={0} steps={3} />
        <Typography
          styles={{ marginVertical: "3%" }}
          align="left"
          size={18}
          font="b"
        >
          Pass type
        </Typography>
        <View
          style={{
            gap: 10,
          }}
        >
          {PassTypes.map((item, key) => {
            return (
              <DarkButton
                isRoute={false}
                text={item.name}
                disabled={item.name !== type}
                key={key}
                action={() => setType(item.name)}
              />
            );
          })}
        </View>
        {type === "Team" && (
          <>
            <Typography
              styles={{ marginVertical: "3%" }}
              align="left"
              size={18}
              font="b"
            >
              Team
            </Typography>
            <View
              style={{
                gap: 10,
              }}
            >
              {[1, 2].map((item, key) => {
                return (
                  <DarkButton
                    isRoute={false}
                    text={"Team" + item}
                    disabled={item !== team}
                    key={key}
                    action={() => setTeam(item)}
                  />
                );
              })}
            </View>
          </>
        )}
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
          route="BookTime"
          type="rounded"
          bg={colors.blue}
          textColor="light"
        />
      </View>
    </ScreenLayout>
  );
};

export default BookPass;
