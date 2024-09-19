import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/shared/lib/theme";
import Typography from "@/shared/ui/Typography";

const CommentCard = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: colors.dark,
        borderRadius: 7,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography>Workout’s comment</Typography>
      <Typography>19:20</Typography>
    </View>
  );
};

export default CommentCard;
