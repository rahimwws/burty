import { View, ScrollView, BackHandler, DeviceEventEmitter } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { CategoriesSelect } from "@/entities/category";
import { useQuery } from "@tanstack/react-query";
import { categories } from "@/entities/category/model/routes";
import { toast } from "@/shared/ui/Toast";
import { CategoryT } from "@/entities/category/model/types";
import { useAppNavigation } from "@/shared/lib/navigation";

const Categories = () => {
  const navigation = useAppNavigation();
  const [selectedCategories, setSelectedCategories] = useState<CategoryT[]>([]);

  const { data, isLoading } = useQuery({
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

  const onBackPress = useCallback(() => {
    if (navigation.canGoBack()) {
      // Emit the event with the selectedCategories
      DeviceEventEmitter.emit("onGoBack", selectedCategories);
      navigation.goBack();
      return true; // Prevent default behavior of hardwareBackPress;
    }
  }, [selectedCategories]);

  useEffect(() => { // detect when system back button pressed
    BackHandler.addEventListener("hardwareBackPress", onBackPress);
    return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress);
  }, [navigation, onBackPress]);

  // handle selection of categories
  const handleCheckPress = useCallback((value: boolean, category: CategoryT) => {
    setSelectedCategories((prevCategories) => {
      if (value) {
        return prevCategories.some((cat) => cat.id === category.id)
          ? prevCategories
          : [...prevCategories, category];
      } else {
        return prevCategories.filter((cat) => cat.id !== category.id);
      }
    });
  }, []);

  return (
    <ScreenLayout>
      <ScrollView>
        <Header title="Categories" type="stack" onBackPress={onBackPress} />
        <View style={{ marginVertical: 10 }}>
          {data?.data.map((item) => {
            return (
              <CategoriesSelect
                key={item.id}
                title={item.title}
                isChecked={selectedCategories.includes(item)}
                onPress={(value) => handleCheckPress(value, item)}
              />
            )
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Categories;
