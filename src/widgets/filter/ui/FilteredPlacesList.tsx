import { ActivityIndicator, FlatList, View } from "react-native";
import { useFilteredSpaces } from "@/features/spaces";
import Typography from "@/shared/ui/Typography";
import { PlaceCard } from "@/widgets/place";
import { useEffect } from "react";
import { toast } from "@/shared/ui/Toast";
import FilterParamsDto from "@/features/spaces/model/types/FilterParamsDto";
import { colors } from "@/shared/lib/theme";

type FilteredPlacesListProps = FilterParamsDto & {}

const FilteredPlacesList = ({
  maxDistance,
  maxPrice,
  minPrice,
}: FilteredPlacesListProps) => {
  const { data, isPending, isLoading } = useFilteredSpaces({
    maxDistance,
    maxPrice,
    minPrice,
  });

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No places data'
      })
    }
  }, [data?.data.length]);

  if (!isLoading && isPending) {
    return null
  }

  return (
    <View>
      {data?.data.length === 0 && (
        <Typography align="center" color="gray">
          No results
        </Typography>
      )}
      {
        isLoading ?
          <ActivityIndicator color={colors.primary} />
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data?.data}
            renderItem={({ item, index }) => {
              return <PlaceCard type="large" item={item} key={index} />;
            }}
            contentContainerStyle={{
              alignItems: "center",
              gap: 15,
            }}
          />
      }
    </View>
  );
};

export default FilteredPlacesList;
