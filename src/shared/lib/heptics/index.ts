import * as Haptics from "expo-haptics";
export const LightHeptic = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};
