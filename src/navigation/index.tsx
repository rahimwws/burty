import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import AuthNavigator from "./navigator/AuthNavigator";
import StackScreens from "./navigator/Stack";
import { getAccessToken } from "@/shared/api/token/storage";

const Index = () => {
  const Stack = createNativeStackNavigator();
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getAccessToken();
      if (token) {
        setInitialRoute("Service");
        console.log(token);
      } else {
        setInitialRoute("Auth");
      }
    };

    checkToken();
  }, []);

  if (initialRoute === null) return null;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen
        name="Service"
        component={StackScreens}
        options={
          {
            // gestureEnabled: false,
          }
        }
      />
    </Stack.Navigator>
  );
};

export default Index;
