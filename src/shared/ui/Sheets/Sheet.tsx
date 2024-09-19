import React, { useCallback, forwardRef } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

import { View } from "react-native";
import { colors } from "@/shared/lib/theme";

interface SheetProps {
  children: React.ReactNode;
  snapPoints?: string[] | false;
}

const Sheet = forwardRef<BottomSheet, SheetProps>(
  ({ children, snapPoints = false }, ref) => {
    const snapPointsCustom = ["40%"];

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints ? snapPoints : snapPointsCustom}
        enableHandlePanningGesture={true}
        handleIndicatorStyle={{ backgroundColor: colors.light, width: 50 }}
        enableContentPanningGesture={true}
        backgroundStyle={{
          backgroundColor: colors.background,
          borderRadius: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: colors.background,
          }}
        >
          {children}
        </View>
      </BottomSheet>
    );
  }
);

export default Sheet;
