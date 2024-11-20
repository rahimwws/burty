import { Linking } from "react-native";

export const openLink = (link: string) => {
  Linking.openURL(link)
    .then((supported) => {
      if (!supported) {
        console.log("Cannot open link:", link);
      } else {
        return Linking.openURL(link);
      }
    })
    .catch((err) => console.error("An error occurred:", err));
};

const openMapWithAddress = (address: string) => {
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(url).catch((err) => {
      console.error('An error occurred while opening map:', err);
    });
  };
