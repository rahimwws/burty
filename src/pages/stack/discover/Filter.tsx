import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import { Header } from "@/components/header";
import { useAppNavigation } from "@/shared/lib/navigation";
import { DistanceBar, FilterPrice } from "@/widgets/filter";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import { PassTypes } from "@/widgets/filter/model/types";
import { colors } from "@/shared/lib/theme";

const Filter = () => {
  const navigation = useAppNavigation();
  const [type, setType] = useState("Single");

  return (
    <ScreenLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "position" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <Header type="stack" title="Filters" />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "5%",
          }}
        >
          <Typography size={18} font="b">
            Sports categories
          </Typography>
          <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
            <Typography size={14} font="m" color="primary">
              Show all
            </Typography>
          </TouchableOpacity>
        </View>

        <DistanceBar />

        {/* Pass Type */}
        <Typography
          styles={{ marginTop: "10%", marginBottom: "3%" }}
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

        <FilterPrice />
        <View
          style={{
            alignSelf: "flex-end",
            marginTop: "auto",
            width: "100%",
          }}
        >
          <LargeButton
            text="Show 4 places"
            isRoute={true}
            bg={colors.light}
            type="rounded"
            action={() => Keyboard.dismiss()}
            route="FilteredPlaces"
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
};

export default Filter;
