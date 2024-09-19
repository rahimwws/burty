import * as ImagePicker from "expo-image-picker";

export const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [3, 4],
    quality: 1,
  });

  if (result.canceled) {
    alert("You did not select any image.");
  }

  return result;
};
