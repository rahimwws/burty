import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ScrollView } from "react-native";
import Line from "@/shared/ui/Lines";
import { CategoriesList } from "@/entities/category";
import { NearByList } from "@/widgets/nearby";
import { PopularByList } from "@/widgets/popular";

const Discover = () => {
  return (
    <ScreenLayout>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: '5%',
        }}
        style={{
          flex: 1,
          marginBottom: "15%",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Discover" type="default" />
        <Line color="primary" styles={{ opacity: 0.7, marginVertical: "3%" }} />
        <CategoriesList />
        <NearByList />
        <PopularByList />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Discover;
