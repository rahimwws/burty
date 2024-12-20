import { useQuery } from "@tanstack/react-query";
import { categories } from "../../model/routes";

export const useCategory = (categoryId?: string) => {
   return useQuery({
      queryKey: ["category", categoryId],
      queryFn: () => categories.getCategoriesById(categoryId!),
      staleTime: 5 * 60 * 1000,
      enabled: !!categoryId
   });
};
