import { ImageSourcePropType } from "react-native";

export interface Slide {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}
export const slides: Slide[] = [
  {
    id: 1,
    title: "All gyms in one place",
    image: require("@/shared/assets/images/onboarding/1.png"),
    description:
      "Find all available gyms in one convenient app. Say goodbye to searching on different websites - everything is here",
  },
  {
    id: 2,
    title: "All gyms in one place",
    image: require("@/shared/assets/images/onboarding/2.png"),
    description:
      "Find all available gyms in one convenient app. Say goodbye to searching on different websites - everything is here",
  },
  {
    id: 3,
    title: "All gyms in one place",
    image: require("@/shared/assets/images/onboarding/3.png"),
    description:
      "Find all available gyms in one convenient app. Say goodbye to searching on different websites - everything is here",
  },
  {
    id: 4,
    title: "All gyms in one place",
    image: require("@/shared/assets/images/onboarding/4.png"),
    description:
      "Find all available gyms in one convenient app. Say goodbye to searching on different websites - everything is here",
  },
];
