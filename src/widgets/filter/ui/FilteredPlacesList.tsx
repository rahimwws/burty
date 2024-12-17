import { FlatList, View } from "react-native";
import { useFilteredSpaces } from "@/features/spaces";
import Typography from "@/shared/ui/Typography";
import { PlaceCard } from "@/components/card";
import { useEffect } from "react";
import { toast } from "@/shared/ui/Toast";

const FilteredPlacesList = () => {
  const { data, isPending, isLoading } = useFilteredSpaces();

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No places data'
      })
    }
  }, [data?.data.length]);

  if (isPending) {
    return null
  }

  return (
    <View>
      {data?.data.length === 0 && (
        <Typography align="center" color="gray">
          No results
        </Typography>
      )}
      <FlatList
        data={data?.data}
        renderItem={({ item, index }) => {
          return <PlaceCard type="large" item={item} key={index} />;
        }}
        contentContainerStyle={{
          alignItems: "center",
          gap: 15,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FilteredPlacesList;
