import { spaces } from "@/features/spaces/model/routes";
import { useLocationStore } from "@/shared/store/location";
import { useQuery } from "@tanstack/react-query";

export const useSpaceDetails = (spaceId?: string) => {
   const { latitude, longitude } = useLocationStore.getState();

   return useQuery({
      queryKey: ["spaceDetails", spaceId],
      queryFn: () => spaces.getSpaceDetails(latitude, longitude, spaceId!),
      enabled: !!spaceId,
      staleTime: 5 * 60 * 1000,
   });
};
