import { PlaceT } from "@/shared/model/types";
import CategoryT from "./CategoryT";

type CategoryDetail = CategoryT & {
   spaces: PlaceT[]
}

export default CategoryDetail;