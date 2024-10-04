import { spaces } from "@/service/spaces/model/routes";
import { useLocationStore } from "@/shared/store/location";
import { useQuery } from "@tanstack/react-query";

export const useNearbySpaces = () => {
  const { latitude, longitude } = useLocationStore.getState();

  return useQuery({
    queryKey: ["nearby"],
    queryFn: () => spaces.getNearbySpaces(latitude, longitude),
    enabled: !!latitude && !!longitude,
    staleTime: 5 * 60 * 1000,
  });
};
