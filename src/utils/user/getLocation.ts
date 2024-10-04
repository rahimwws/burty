import { useLocationStore } from "@/shared/store/location";
import * as Location from "expo-location";
import { Alert } from "react-native";

export const getLocation = async () => {
  const { setLocation } = useLocationStore.getState();
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Permission to access location was denied");
    return;
  }

  let currentLocation = await Location.getCurrentPositionAsync({});
  if (currentLocation) {
    const { latitude, longitude } = currentLocation.coords;
    setLocation(latitude, longitude);
  }
};
