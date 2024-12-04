import { DefaultTheme } from "@react-navigation/native";
import { colors } from "@/shared/lib/theme";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};
