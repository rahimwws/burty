import {
  ParamListBase,
  useNavigation,
  type NavigationProp,
} from "@react-navigation/native";

type AppNavigationProp = NavigationProp<ParamListBase>;

export const useAppNavigation = (): AppNavigationProp => {
  return useNavigation<AppNavigationProp>();
};
