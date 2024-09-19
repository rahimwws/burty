import { View, Text, FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { MentorPlace } from "@/components/card";
import Line from "@/shared/ui/Lines";

const Matches = () => {
  return (
    <ScreenLayout>
      <Header title="Matches" type="default" />
      <Line color="primary" styles={{ opacity: 0.7, marginVertical: "3%" }} />
      <FlatList
        data={[1, 2, 3]}
        renderItem={() => {
          return <MentorPlace type="large" />;
        }}
        contentContainerStyle={{
          gap: 20,
        }}
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: "5%",
        }}
      />
    </ScreenLayout>
  );
};

export default Matches;
