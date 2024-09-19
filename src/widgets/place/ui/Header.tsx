import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LightHeptic } from "@/shared/lib/heptics";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ArrowLeft from "@/shared/assets/icons/interface/ArrowLeft";
import { colors } from "@/shared/lib/theme";
import Share from "@/shared/assets/icons/interface/Share";

const PlaceHeader = ({ role = "user" }: { role?: "user" | "mentor" }) => {
  const navigation = useAppNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: insets.top,
        paddingHorizontal: 20,
        position: "absolute",
        width: "100%",
        zIndex: 1,
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#000000BD",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          LightHeptic();
          navigation.goBack();
        }}
      >
        <ArrowLeft size={20} fill={colors.light} />
      </TouchableOpacity>
      {role === "user" && (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#000000BD",
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            LightHeptic();
          }}
        >
          <Share size={20} fill={colors.light} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PlaceHeader;
