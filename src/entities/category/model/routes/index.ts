import { client } from "@/shared/api";

interface Category {
  id: string;
  title: string;
}

export const categories = {
  async getCategories() {
    return await client.get<Category[]>("/category");
  },
  async getCategoriesById(id: string) {
    return await client.get(`/category/${id}`);
  },
};
