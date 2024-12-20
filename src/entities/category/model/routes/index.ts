import { client } from "@/shared/api";
import { PlaceT } from "@/shared/model/types";

interface Category {
  id: string;
  title: string;
}

interface CategoryDetail extends Category {
  spaces: PlaceT[]
}

export const categories = {
  async getCategories() {
    return await client.get<Category[]>("/category");
  },
  async getCategoriesById(id: string) {
    return await client.get<CategoryDetail>(`/category/${id}`);
  },
};
