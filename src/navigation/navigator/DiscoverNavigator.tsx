import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "@/pages/tabs/Discover";
import Categories from "@/pages/stack/discover/Categories";
import Matches from "@/pages/stack/discover/Matches";
import ListSpaces from "@/pages/stack/discover/ListSpaces";
import useRoleStore from "@/shared/store/role";

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
      <Stack.Screen name="ListSpaces" component={ListSpaces} />
    </Stack.Navigator>
  );
};

export default DiscoverNavigator;
