import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { ProfileActions, ProfileView } from "@/widgets/profile";
import Typography from "@/shared/ui/Typography";
import Notification from "@/shared/assets/icons/interface/Notification";
import ArrowRight from "@/shared/assets/icons/interface/ArrowRight";
import Help from "@/shared/assets/icons/interface/Help";
import { colors } from "@/shared/lib/theme";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useQuery } from "@tanstack/react-query";
import { user } from "@/widgets/profile/model/routes";
import { useUserStore } from "@/shared/store/user";
import { useLocationStore } from "@/shared/store/location";

const Profile = () => {
  const navigation = useAppNavigation();
  const setUser = useUserStore((store) => store.setUser);
  const { latitude, longitude } = useLocationStore((store) => ({
    latitude: store.latitude,
    longitude: store.longitude,
  }));

  const { data, isPending, refetch, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: () => user.get(),
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false));
  }, [refetch]);

  useEffect(() => {
    if (isSuccess && data?.data && latitude && longitude) {
      setUser({
        ...data.data,
        latitude,
        longitude,
      });
    }
  }, [isSuccess, data, latitude, longitude, setUser]);
  if (!data?.data || isPending) {
    return (
      <ScreenLayout>
        <Header title="Profile" type="default" />
      </ScreenLayout>
    );
  }

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
          styles={{ marginVertical: "5%" }}
          align="left"
        >
          General
        </Typography>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
