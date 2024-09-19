import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "@/pages/tabs/Discover";
import Categories from "@/pages/stack/discover/Categories";
import useRoleStore from "@/shared/store/role";
import Matches from "@/pages/stack/discover/Matches";

const DiscoverNavigator = () => {
  const Stack = createNativeStackNavigator();
  const role = useRoleStore((store) => store.role);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {role === "mentor" && <Stack.Screen name="Matches" component={Matches} />}
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
};

export default DiscoverNavigator;
