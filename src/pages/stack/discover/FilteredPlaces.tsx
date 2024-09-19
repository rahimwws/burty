import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PlaceCard } from "@/components/card";

const FilteredPlaces = () => {
  const tags = ["1 km+-", "Single", "20$"];
  const navigation = useAppNavigation();
  return (
    <ScreenLayout pb={0}>
      <Header title="Filters" type="stack" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: "5%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {tags.map((tag, index) => {
            return (
              <View
                style={{
                  backgroundColor: colors.dark,
                  padding: 10,
                  borderRadius: 5,
                }}
                key={index}
              >
                <Typography color="gray">{tag}</Typography>
              </View>
            );
          })}
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Typography color="primary" font="m">
            Clear All
          </Typography>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item, index }) => {
          return <PlaceCard type="large" key={index} />;
        }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
        }}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
};

export default FilteredPlaces;
