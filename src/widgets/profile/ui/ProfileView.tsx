import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import Edit from "@/shared/assets/icons/interface/Edit";
import { useAppNavigation } from "@/shared/lib/navigation";

const ProfileView = ({ qr = false, item }: { qr?: boolean; item: User }) => {
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        marginVertical: "3%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 45,
            backgroundColor: colors.dark,
          }}
        ></View>
        <View>
          <Typography size={22} font="black" align="left">
            {item?.userName ?? "Name Surname"}
          </Typography>
          <Typography font="m" color="gray" align="left">
            {item?.email}
          </Typography>
        </View>
      </View>
      {!qr && (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("EditProfile", { user: item })}
        >
          <Edit size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileView;
