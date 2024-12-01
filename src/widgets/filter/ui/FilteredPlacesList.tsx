import { FlatList, View } from "react-native";
import { useFilteredSpaces } from "@/features/spaces";
import Typography from "@/shared/ui/Typography";
import { PlaceCard } from "@/components/card";

const FilteredPlacesList = () => {
  const { data, isPending } = useFilteredSpaces();

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
