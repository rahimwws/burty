import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { LargeButton } from "@/shared/ui/Button";
import { useAppNavigation } from "@/shared/lib/navigation";
import { FormField } from "@/shared/ui/FormField";
import { useChangeAvatar, useUpdateProfile } from "@/widgets/profile/lib/hooks";
import { pickImageAsync } from "@/widgets/profile/config/picker";
import Avatar from "@/shared/ui/Avatar";

type EditProfileRouteProp = RouteProp<
  { EditProfile: { user: User } },
  "EditProfile"
>;

const EditProfile: React.FC = () => {
  const route = useRoute<EditProfileRouteProp>();
  const navigation = useAppNavigation();
  const user = route.params.user;

  const [name, setName] = useState(() => {
    const userName = user.userName ?? "";
    return userName.split(" ")[0] || "";
  });

  const [surname, setSurname] = useState(() => {
    const userName = user.userName ?? "";
    return userName.split(" ").slice(1).join(" ") || "";
  });

  const [email, setEmail] = useState(user.email ?? "");
  const [imageUri, setImageUri] = useState<string | null>(
    user.media?.filePath ?? null
  );

  const { mutate: changeAvatar } = useChangeAvatar();
  const { mutate: updateProfile } = useUpdateProfile();

  const handleChangeAvatar = useCallback(async () => {
    const result = await pickImageAsync();
    if (!result?.assets?.length) return;
    const uri = result.assets[0].uri;
    setImageUri(uri);
    changeAvatar({ uri });
  }, [changeAvatar]);

  const handleUpdateProfile = useCallback(() => {
    updateProfile(
      { email, userName: `${name} ${surname}` },
      {
        onSuccess: () => navigation.goBack(),
      }
    );
  }, [updateProfile, email, name, surname, navigation]);

  return (
    <ScreenLayout>
      <Header title="Edit Profile" type="stack" />
      <View style={styles.container}>
        <Avatar imageUri={imageUri} onEdit={handleChangeAvatar} />
        <FormField
          label="First Name"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <FormField
          label="Last Name"
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
        <FormField
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <LargeButton
        text="Save"
        isRoute={false}
        action={handleUpdateProfile}
        type="rounded"
      />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "5%",
    flex: 1,
  },
});

export default EditProfile;
