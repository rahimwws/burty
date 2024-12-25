import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { SearchCard } from "@/features/search/ui";
import { recentSearchHistory } from "@/features/search/model/recentSearchHistory";
import { usePopularSpaces } from "@/features/spaces";
import { PlaceCard } from "../card";
import { PlaceT } from "@/shared/model/types";
import { colors } from "@/shared/lib/theme";

type SearchListProps = {
  items: PlaceT[]
  itemsLoading?: boolean
}

const SearchList = ({ items, itemsLoading }: SearchListProps) => {
  const navigation = useAppNavigation();
  const [recentSearches, setRecentSearches] = useState<string[] | null>();

  const {
    data: popularSpaces,
  } = usePopularSpaces();

  useEffect(() => {
    (async () => {
      const searches = await recentSearchHistory.load();
      setRecentSearches(searches)
    })()
  }, []);

  return (
    <ScrollView
      style={{
        marginTop: "15%",
      }}
      showsVerticalScrollIndicator={false}
    >
      {items.length === 0 ? (
        <View>
          {
            !!recentSearches?.length &&
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
          }
          {
            recentSearches?.map(txt => {
              return (
                <SearchCard
                  txt={txt}
                  recent
                />
              )
            })
          }
          {
            !!popularSpaces?.data.length &&
            <View style={{ marginVertical: "2%" }}>
              <Typography size={22} font="m" align="left">
                Popular
              </Typography>
              {
                popularSpaces?.data.map(space => {
                  return (
                    <SearchCard txt={space.name} />
                  )
                })
              }
            </View>
          }
        </View>
      ) : (
        <View
          style={{
            gap: 20,
          }}
        >
          {
            itemsLoading ?
              <ActivityIndicator color={colors.primary} />
              :
              items.map(item => {
                return (
                  <PlaceCard
                    item={item}
                    type="small"
                  />
                )
              })
          }
        </View>
      )}
    </ScrollView>
  );
};

export default SearchList;
