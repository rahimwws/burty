import { spaces } from "@/features/spaces/model/routes";
import { useLocationStore } from "@/shared/store/location";
import { useQuery } from "@tanstack/react-query";
import FilterParamsDto from "../../model/types/FilterParamsDto";

export const useFilteredSpaces = ({
  maxDistance,
  maxPrice,
  minPrice,
  search,
}: FilterParamsDto) => {
  const { latitude, longitude } = useLocationStore.getState();

  return useQuery({
    queryKey: ["filtered", maxDistance, maxPrice, minPrice, search],
    queryFn: () => spaces.getFilteredSpaces({
      latitude,
      longitude,
      maxDistance,
      maxPrice,
      minPrice,
      search
    }),
    enabled: !!latitude && !!longitude,
    staleTime: 5 * 60 * 1000,
  });
};
