import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ScrollView } from "react-native";
import Line from "@/shared/ui/Lines";
import { CategoriesList } from "@/widgets/categories/ui";
import { NearByList } from "@/widgets/nearby";

const Discover = () => {
  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
          marginBottom: "10%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Discover" type="default" />
        <Line color="primary" styles={{ opacity: 0.7, marginVertical: "3%" }} />
        <CategoriesList />
        <NearByList />
        <NearByList />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Discover;
