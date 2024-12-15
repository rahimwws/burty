import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { CategoriesSelect } from "@/entities/category";
import { useQuery } from "@tanstack/react-query";
import { categories } from "@/entities/category/model/routes";

const Categories = () => {
  const { data, isSuccess, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categories.getCategories(),
  });
  // if (isPending) return null;
  return (
    <ScreenLayout>
      <ScrollView>
        <Header title="Categories" type="stack" />
        <View style={{ marginVertical: 10 }}>
          {data?.data.map((item, index) => {
            return <CategoriesSelect item={item.title} key={index} />;
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Categories;
