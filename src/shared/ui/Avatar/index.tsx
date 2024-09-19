import React from "react";
import {
  View,
  TouchableOpacity,
  Image as RNImage,
  StyleSheet,
} from "react-native";

import ImageIcon from "@/shared/assets/icons/interface/Image";
import { colors } from "@/shared/lib/theme";

interface AvatarProps {
  imageUri: string | null;
  onEdit: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ imageUri, onEdit }) => (
  <View style={styles.avatarContainer}>
    {imageUri && (
      <RNImage source={{ uri: imageUri }} style={styles.avatarImage} />
    )}
    <TouchableOpacity onPress={onEdit} style={styles.avatarEditButton}>
      <ImageIcon size={30} fill={colors.light} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.dark,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  avatarEditButton: {
    position: "absolute",
  },
});

export default Avatar;
