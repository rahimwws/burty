import { useQuery } from "@tanstack/react-query";
import { categories } from "../../model/routes";

export const useCategories = () => {
   return useQuery({
      queryKey: ["categories"],
      queryFn: () => categories.getCategories(),
      staleTime: 5 * 60 * 1000,
   });
};
