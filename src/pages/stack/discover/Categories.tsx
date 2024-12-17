import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { CategoriesSelect } from "@/entities/category";
import { useQuery } from "@tanstack/react-query";
import { categories } from "@/entities/category/model/routes";
import { toast } from "@/shared/ui/Toast";

const Categories = () => {
  const { data, isSuccess, isPending, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categories.getCategories(),
  });
  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No categories data'
      })
    }
  }, [data?.data.length]);
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
