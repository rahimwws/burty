import { View, TouchableOpacity, ActivityIndicator, DeviceEventEmitter } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { toast } from "@/shared/ui/Toast";
import { colors } from "@/shared/lib/theme";
import { useCategories } from "../lib/hooks/useCategories";
import { CategoryT } from "../model/types";

const List = () => {
  const navigation = useAppNavigation();
  const { data, isLoading } = useCategories();

  const [categories, setCategoies] = useState<CategoryT[]>([]);

  useEffect(() => {
    if (!isLoading && data?.data.length) {
      setCategoies(data.data)
    }
  }, [isLoading, data?.data.length])

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No categories data'
      })
    }
  }, [data?.data.length, isLoading]);

  useEffect(() => { // subcribe to onGoBack event
    const subscription = DeviceEventEmitter.addListener(
      "onGoBack",
      (categoiesList: CategoryT[]) => {
        if (categoiesList.length)
          setCategoies(categoiesList);
        else
          setCategoies(data?.data || [])
      }
    );

    return () => subscription.remove();
  }, [data?.data.length]);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography font="b" size={20}>
          Categories
        </Typography>
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <Typography font="m" color="primary" size={14}>
            Filters
          </Typography>
        </TouchableOpacity>
      </View>
      <Typography align="left" styles={{ marginBottom: "5%", marginTop: "2%" }}>
        Explore classes for these activities
      </Typography>
      {
        isLoading ?
          <ActivityIndicator color={colors.primary} />
          :
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {categories.slice(0, 5).map((item, index) => {
              return <Button
                title={item.title}
                key={item.id}
                onPress={() => {
                  navigation.navigate("ListSpaces", { name: item.title, categoryId: item.id })
                }}
              />;
            })}
            <Button
              title="Other"
              onPress={() => {
                navigation.navigate("Categories")
              }}
            />
          </View>
      }
    </>
  );
};

export default List;
