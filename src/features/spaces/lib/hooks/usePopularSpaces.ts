import { spaces } from "@/features/spaces/model/routes";
import { useLocationStore } from "@/shared/store/location";
import { useQuery } from "@tanstack/react-query";

export const usePopularSpaces = () => {
   const { latitude, longitude } = useLocationStore.getState();

   return useQuery({
      queryKey: ["popular", latitude, longitude],
      queryFn: () => spaces.getPopularSpaces(latitude, longitude),
      enabled: !!latitude && !!longitude,
      staleTime: 5 * 60 * 1000,
   });
};
