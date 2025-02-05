import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverSvg from "@/shared/assets/icons/tabs/DiscoverSvg";
import { colors } from "@/shared/lib/theme";
import Maps from "@/shared/assets/icons/tabs/Maps";
import Workouts from "@/shared/assets/icons/tabs/Workouts";
import Pass from "@/shared/assets/icons/tabs/Pass";
import ProfileSvg from "@/shared/assets/icons/tabs/ProfileSvg";
import DiscoverNavigator from "./navigator/DiscoverNavigator";
import Spaces from "@/pages/stack/map/Spaces";
import { WorkoutScreen } from "@/pages/tabs/Workouts";
import MyPass from "@/pages/tabs/MyPass";
import Profile from "@/pages/tabs/Profile";
import MentorProfile from "@/pages/tabs/MentorProfile";
import Typography from "@/shared/ui/Typography";
import Scan from "@/pages/stack/scan/Scan";
import ScanSvg from "@/shared/assets/icons/interface/ScanSvg";
import useRoleStore from "@/shared/store/role";
import MatchesHistory from "@/pages/stack/wortout/MatchesHistory";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  const { width } = Dimensions.get("window");
  const role = useRoleStore((store) => store.role);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.dark,
          borderTopWidth: 0,
          borderRadius: 30,
          position: "absolute",
          marginHorizontal: 10,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
          bottom: Platform.OS === "ios" ? 15 : 0,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === "DiscoverNavigator") {
            return (
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <DiscoverSvg
                  size={23}
                  fill={focused ? colors.primary : colors.gray}
                />
              </View>
            );
          }
          if (route.name === "Map") {
            return (
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <Maps size={23} fill={focused ? colors.primary : colors.gray} />
              </View>
            );
          }
          if (route.name === "Workouts") {
            return (
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <Workouts
                  size={23}
                  fill={focused ? colors.primary : colors.gray}
                />
              </View>
            );
          }
          if (route.name === "Scan") {
            return (
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <ScanSvg
                  size={23}
                  fill={focused ? colors.primary : colors.gray}
                />
              </View>
            );
          }
          if (route.name === "MyPass") {
            return (
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <Pass size={23} fill={focused ? colors.primary : colors.gray} />
              </View>
            );
          }
          if (route.name === "Profile") {
            return (
              <View
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <ProfileSvg
                  size={23}
                  fill={focused ? colors.primary : colors.gray}
                />
              </View>
            );
          }
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "m",
        },
        tabBarActiveTintColor: `${colors.primary}`,
        tabBarLabel: ({ focused }) => {
          return focused ? (
            <Typography size={12} font="m" color="primary" styles={[]}>
              {route.name === "DiscoverNavigator" ? "Discover" : route.name}
            </Typography>
          ) : (
            <Typography size={12} font="m" color="gray">
              {route.name === "DiscoverNavigator" ? "Discover" : route.name}
            </Typography>
          );
        },
      })}
    >
      <Tab.Screen
        name="DiscoverNavigator"
        component={DiscoverNavigator}
        options={{
          title: "Discover",
        }}
      />
      {role === "user" && (
        <Tab.Screen name="Map" component={Spaces} options={{}} />
      )}
      {role === "mentor" && (
        <Tab.Screen name="Scan" component={Scan} options={{}} />
      )}
      <Tab.Screen
        name="Workouts"
        component={
          role == 'user' ?
            WorkoutScreen : MatchesHistory
        }
      />
      {role === "user" && (
        <Tab.Screen name="MyPass" component={MyPass} options={{}} />
      )}
      <Tab.Screen
        name="Profile"
        component={
          role === "user" ?
            Profile : MentorProfile
        }
        options={{}}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
