import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Header } from "@/components/header";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { MentorPlace, PlaceCard } from "@/components/card";
import useRoleStore from "@/shared/store/role";

const Type = ({
  text,
  active,
  onPress,
}: {
  text: string;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active ? colors.primary : colors.dark,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "31%",
        height: 40,
      }}
      onPress={onPress}
    >
      <Typography font="m" color={active ? "background" : "light"}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

const Workouts = () => {
  const [active, setActive] = useState("This week");
  const role = useRoleStore((store) => store.role);
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title={role === "mentor" ? "Matches history" : "Workouts"}
          type="default"
        />
        {role === "user" && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <Type
              text="This week"
              active={active === "This week"}
              onPress={() => setActive("This week")}
            />
            <Type
              text="This months"
              active={active === "This months"}
              onPress={() => setActive("This months")}
            />
            <Type
              text="This year"
              active={active === "This year"}
              onPress={() => setActive("This year")}
            />
          </View>
        )}
        <View
          style={{
            flex: 1,
            gap: 20,
            marginVertical: "5%",
          }}
        >
          {role === "mentor" ? (
            <>
              <MentorPlace type="large" />
              <MentorPlace type="large" />
              <MentorPlace type="large" used />
              <MentorPlace type="large" used />
            </>
          ) : (
            <>
              <PlaceCard type="large" reserved />
              <PlaceCard type="large" reserved />
              <PlaceCard type="large" reserved />
              <PlaceCard type="large" reserved used />
            </>
          )}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export { Workouts as WorkoutScreen };
