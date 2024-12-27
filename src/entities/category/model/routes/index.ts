import { client } from "@/shared/api";
import { CategoryDetailT, CategoryT } from "../types";

export const categories = {
  async getCategories() {
    return await client.get<CategoryT[]>("/category");
  },
  async getCategoriesById(id: string) {
    return await client.get<CategoryDetailT>(`/category/${id}`);
  },
};
