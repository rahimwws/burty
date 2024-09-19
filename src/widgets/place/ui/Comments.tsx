import { View } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import CommentCard from "@/components/card/CommentCard";

const Comments = () => {
  const navigation = useAppNavigation();
  return (
    <View style={{ marginTop: "3%" }}>
      <Typography
        size={22}
        font="m"
        align="left"
        styles={{ marginBottom: "3%" }}
      >
        Comments
      </Typography>
      <View
        style={{
          gap: 10,
        }}
      >
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </View>
    </View>
  );
};

export default Comments;
