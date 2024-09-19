import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import Recent from "@/shared/assets/icons/interface/Recent";
import { colors } from "@/shared/lib/theme";
import ArrowUp from "@/shared/assets/icons/interface/ArrowUp";
import Fire from "@/shared/assets/icons/interface/Fire";
import Place from "../card/Place";
import { useAppNavigation } from "@/shared/lib/navigation";

const SearchCard = ({ recent = false }: { recent?: boolean }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: "2%",
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        {recent ? (
          <Recent size={20} fill={colors.light} />
        ) : (
          <Fire size={22} fill={colors.light} />
        )}
        <Typography>Basketball</Typography>
      </View>
      <ArrowUp size={15} fill={colors.light} />
    </TouchableOpacity>
  );
};

const SearchList = ({ items }: { items: any[] }) => {
  const navigation = useAppNavigation();
  return (
    <ScrollView
      style={{
        marginTop: "15%",
      }}
      showsVerticalScrollIndicator={false}
    >
      {items.length === 0 ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: "2%",
            }}
          >
            <Typography size={22} font="m">
              Recent
            </Typography>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Typography color="primary">View all</Typography>
            </TouchableOpacity>
          </View>
          <SearchCard recent />
          <View style={{ marginVertical: "2%" }}>
            <Typography size={22} font="m" align="left">
              Popular
            </Typography>
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </View>
        </View>
      ) : (
        <View
          style={{
            gap: 20,
          }}
        >
          <Place type="small" />
          <Place type="small" />
          <Place type="small" />
        </View>
      )}
    </ScrollView>
  );
};

export default SearchList;
