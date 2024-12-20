import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import Button from "./Button";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useQuery } from "@tanstack/react-query";
import { categories } from "../model/routes";
import { toast } from "@/shared/ui/Toast";
import { colors } from "@/shared/lib/theme";
import { useCategories } from "../lib/hooks/useCategories";

const List = () => {
  const navigation = useAppNavigation();
  const { data, isSuccess, isPending, isLoading } = useCategories();

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No categories data'
      })
    }
  }, [data?.data.length, isLoading]);

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
            {data?.data.slice(0, 5).map((item, index) => {
              return <Button
                title={item.title}
                key={item.id}
                onPress={() => {
                  navigation.navigate("ListSpaces", { name: item.title, categoryId: item.id })
                }}
              />;
            })}
            {/* <Button title="Other" route="Categories" /> */}
          </View>
      }
    </>
  );
};

export default List;
