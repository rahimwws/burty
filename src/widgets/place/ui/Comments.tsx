import { View } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { useAppNavigation } from "@/shared/lib/navigation";
import { CommentT } from "@/features/workout/model/types";
import { Comment } from "@/entities/workout/ui";
import dayjs from "dayjs";

const Comments = ({ comments }: { comments?: CommentT[] }) => {
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
        {
          comments?.slice(0, 5)?.map(comment => {
            return (
              <Comment
                comment={comment.comment}
                time={dayjs(comment.createdAt).format('HH:mm')}
              />
            )
          })
        }
      </View>
    </View>
  );
};

export default Comments;
