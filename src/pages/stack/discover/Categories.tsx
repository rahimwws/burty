import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { CategoriesSelect } from "@/widgets/categories/ui";

const Categories = () => {
  return (
    <ScreenLayout>
      <ScrollView>
        <Header title="Categories" type="stack" />
        <View style={{ marginVertical: 10 }}>
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
          <CategoriesSelect />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Categories;
