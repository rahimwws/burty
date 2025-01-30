import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import Edit from "@/shared/assets/icons/interface/Edit";
import { useAppNavigation } from "@/shared/lib/navigation";
import { User } from "@/shared/model/types/user";
import styles from "./style";

type ProfileViewProps = {
  qr?: boolean;
  item: Partial<User>
  isMentor?: boolean
}

const ProfileView = ({
  qr = false,
  item,
  isMentor = false
}: ProfileViewProps) => {
  const navigation = useAppNavigation();
  return (
    <View
      style={styles.wrap}
    >
      <View
        style={styles.content}
      >
        {
          item?.media ?
            <Image
              style={styles.profileImg}
              source={{
                uri: item.media.filePath
              }}
            />
            :
            <View
              style={[
                styles.profileImg,
                styles.bgDark,
              ]}
            />
        }
        <View>
          <Typography size={22} font="black" align="left">
            {item?.firstName ?? "Name"} {item?.lastName ?? "Surname"}
          </Typography>
          <Typography font="m" color="gray" align="left">
            {item?.email}
          </Typography>
        </View>
      </View>
      {!qr && (
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate(
            isMentor ? "MentorEditProfile" : "EditProfile",
            { user: item }
          )}
        >
          <Edit size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileView;
