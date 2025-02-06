import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import { LargeButton } from "@/shared/ui/Button";
import { useAppNavigation } from "@/shared/lib/navigation";
import { FormField } from "@/shared/ui/FormField";
import { useChangeMentorAvatar, useUpdateMentorProfile, } from "@/widgets/profile/lib/hooks";
import { pickImageAsync } from "@/widgets/profile/config/picker";
import Avatar from "@/shared/ui/Avatar";
import { UserT } from "@/shared/model/types";

type MentorEditProfileRouteProp = RouteProp<
  { MentorEditProfile: { user: UserT } },
  "MentorEditProfile"
>;

const MentorEditProfile: React.FC = () => {
  const route = useRoute<MentorEditProfileRouteProp>();
  const navigation = useAppNavigation();
  const user = route.params.user;

  const [name, setName] = useState(user.firstName ?? "");

  const [surname, setSurname] = useState(user.lastName ?? "");

  const [imageUri, setImageUri] = useState<string | null>(
    user.media?.filePath ?? null
  );

  const { mutate: changeAvatar } = useChangeMentorAvatar();
  const {
    mutate: updateProfile,
    isPending: updatingProfile
  } = useUpdateMentorProfile();

  const handleChangeAvatar = useCallback(async () => {
    const result = await pickImageAsync();
    if (!result?.assets?.length) return;
    console.log(result.assets?.[0]?.uri)
    const uri = result.assets[0].uri;
    setImageUri(uri);
    changeAvatar({ uri });
  }, [changeAvatar]);

  const handleUpdateProfile = useCallback(() => {
    updateProfile(
      { firstName: name, lastName: surname },
      {
        onSuccess: () => navigation.goBack(),
      }
    );
  }, [updateProfile, name, surname, navigation]);

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
      </View>
      <LargeButton
        text="Save"
        isRoute={false}
        action={handleUpdateProfile}
        type="rounded"
        isLoading={updatingProfile}
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

export default MentorEditProfile;
