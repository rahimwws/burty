import { View, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { SearchCard } from "@/features/search/ui";
import { recentSearchHistory } from "@/features/search/model/recentSearchHistory";
import { usePopularSpaces } from "@/features/spaces";
import { PlaceT } from "@/shared/model/types";
import { colors } from "@/shared/lib/theme";
import SearchPlaceCard from "@/features/search/ui/SearchPlaceCard";

type SearchListProps = {
  items: PlaceT[]
  itemsLoading?: boolean
  isSearching?: boolean
  onPress?: (value: string) => void
}

const SearchList = ({ items, itemsLoading, isSearching, onPress }: SearchListProps) => {
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
      {
        !isSearching ? (
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
              recentSearches?.map((txt, i) => {
                return (
                  <SearchCard
                    key={i}
                    txt={txt}
                    onPress={() => onPress?.(txt)}
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
                      <SearchCard
                        key={space.id}
                        txt={space.name}
                        onPress={() => onPress?.(space.name)}
                      />
                    )
                  })
                }
              </View>
            }
          </View>
        ) : (
          <View
            style={{
              marginVertical: '5%',
              gap: 15,
            }}
          >
            {
              itemsLoading ?
                <ActivityIndicator color={colors.primary} />
                :
                items.length ?
                  items.map(item => {
                    return (
                      <SearchPlaceCard
                        key={item.id}
                        place={item}
                      />
                    )
                  })
                  :
                  <Typography color="gray" size={18}>
                    No results
                  </Typography>
            }
          </View>
        )}
    </ScrollView>
  );
};

export default SearchList;
