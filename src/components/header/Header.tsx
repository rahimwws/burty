import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import ArrowLeft from "@/shared/assets/icons/interface/ArrowLeft";
import { useAppNavigation } from "@/shared/lib/navigation";
import { LightHeptic } from "@/shared/lib/heptics";
import Plus from "@/shared/assets/icons/interface/Plus";

const Header = ({
  type,
  title,
  styles,
  right = false,
  action,
}: {
  type: "default" | "stack";
  title: string;
  styles?: StyleProp<ViewStyle>;
  right?: boolean;
  action?: () => void;
}) => {
  const navigation = useAppNavigation();
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          padding: type === "default" ? 0 : 10,
          borderRadius: 55,
          borderWidth: type === "stack" ? 1 : 0,
          borderColor: colors.dark,
        },
        styles,
      ]}
    >
      {type === "stack" && (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.primary,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            LightHeptic();
            navigation.goBack();
          }}
        >
          <ArrowLeft size={20} fill={colors.background} />
        </TouchableOpacity>
      )}

      <View
        style={{
          flex: 1,
        }}
      >
        <Typography
          size={26}
          font="b"
          align={type === "stack" ? "center" : "left"}
        >
          {title}
        </Typography>
      </View>

      {type === "stack" && !right && <View style={{ width: 50 }} />}
      {right && (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: colors.primary,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            LightHeptic();
            // navigation.goBack();
            action && action();
          }}
        >
          <Plus size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
