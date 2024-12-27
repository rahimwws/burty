import { View, Text, TouchableOpacity, FlatList, DeviceEventEmitter, BackHandler } from "react-native";
import React, { useCallback, useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { FilteredPlacesList } from "@/widgets/filter";
import { RouteProp, useRoute } from "@react-navigation/native";

type RouteParams = {
  filters: {
    distance: number
    fromPrice: number
    toPrice: number
    passType: string
    onGoBack?: Function
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "filters">;

const FilteredPlaces = () => {
  const route = useRoute<MyScreenRouteProp>();
  const navigation = useAppNavigation();
  const {
    distance,
    fromPrice,
    toPrice,
    passType,
  } = route.params;

  const tags = [`${distance} km+-`, passType, toPrice ? `${toPrice}$` : null];

  const onBackPress = useCallback(() => {
    if (navigation.canGoBack()) {
      // Emit the event with the selectedCategories
      DeviceEventEmitter.emit("onPressClear");
      navigation.goBack();
    }
  }, []);

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
            if (tag)
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
        <TouchableOpacity onPress={() => {
          onBackPress()
        }}>
          <Typography color="primary" font="m">
            Clear All
          </Typography>
        </TouchableOpacity>
      </View>
      <FilteredPlacesList
        maxDistance={distance}
        minPrice={fromPrice}
        maxPrice={toPrice}
        passType={passType}
      />
    </ScreenLayout>
  );
};

export default FilteredPlaces;
