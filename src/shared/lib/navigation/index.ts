import {
  ParamListBase,
  useNavigation,
  type NavigationProp,
} from "@react-navigation/native";
import { createNavigationContainerRef } from '@react-navigation/native';

type AppNavigationProp = NavigationProp<ParamListBase>;

export const navigationRef = createNavigationContainerRef<Record<string, any>>();

export const useAppNavigation = (): AppNavigationProp => {
  return useNavigation<AppNavigationProp>();
};

export function navigate(
  name: string,
  params?: Record<string, any>
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}