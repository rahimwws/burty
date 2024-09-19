import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Button from "./Button";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";

const List = () => {
  const navigation = useAppNavigation();
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
        <Button title="Soccer field" />
        <Button title="Basketball court" />
        <Button title="Tennis court" />
        <Button title="Swimming pool" />
        <Button title="Gym" />
        <Button title="Other" route="Categories" />
      </View>
    </>
  );
};

export default List;
