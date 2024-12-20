import { spaces } from "@/features/spaces/model/routes";
import { useLocationStore } from "@/shared/store/location";
import { useQuery } from "@tanstack/react-query";
import FilterParamsDto from "../../model/types/FilterParamsDto";

export const useFilteredSpaces = ({
  maxDistance,
  maxPrice,
  minPrice,
  passType
}: FilterParamsDto) => {
  const { latitude, longitude } = useLocationStore.getState();

  return useQuery({
    queryKey: ["filtered"],
    queryFn: () => spaces.getFilteredSpaces({
      latitude,
      longitude,
      maxDistance,
      maxPrice,
      minPrice,
      passType
    }),
    enabled: !!latitude && !!longitude,
    staleTime: 5 * 60 * 1000,
  });
};
