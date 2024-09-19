import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ProfileActions, ProfileView } from "@/widgets/profile";
import Typography from "@/shared/ui/Typography";
import Notification from "@/shared/assets/icons/interface/Notification";
import { colors } from "@/shared/lib/theme";
import ArrowRight from "@/shared/assets/icons/interface/ArrowRight";
import Help from "@/shared/assets/icons/interface/Help";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useQuery } from "@tanstack/react-query";
import { user } from "@/widgets/profile/model/routes";
import { RefreshControl } from "react-native-gesture-handler";

const Profile = () => {
  const navigation = useAppNavigation();
  const { data, isPending, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => user.get(),
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false));
  }, [refetch]);

  if (!data?.data || isPending)
    return (
      <ScreenLayout>
        <Header title="Profile" type="default" />
      </ScreenLayout>
    );
  return (
    <ScreenLayout>
      <Header title="Profile" type="default" />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors.light}
          />
        }
      >
        <ProfileView item={data.data} />

        <Typography
          size={22}
          font="b"
          styles={{
            marginVertical: "5%",
          }}
          align="left"
        >
          General
        </Typography>

        {/* Notification Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Notification size={20} fill={colors.light} />
            <Typography size={18} font="m">
              Notification
            </Typography>
          </View>
          <ArrowRight size={15} fill={colors.light} />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Support")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "5%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Help size={20} fill={colors.light} />
            <Typography size={18} font="m">
              Help and support
            </Typography>
          </View>
          <ArrowRight size={15} fill={colors.light} />
        </TouchableOpacity>
        <ProfileActions />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;
