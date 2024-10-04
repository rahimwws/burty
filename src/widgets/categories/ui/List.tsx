import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Button from "./Button";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useQuery } from "@tanstack/react-query";
import { categories } from "../model/routes";

const List = () => {
  const navigation = useAppNavigation();
  const { data, isSuccess, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: () => categories.getCategories(),
  });
  if (isPending) return null;
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        {data?.data.slice(0, 5).map((item, index) => {
          return <Button title={item.title} key={index} />;
        })}
        <Button title="Other" route="Categories" />
      </View>
    </>
  );
};

export default List;
