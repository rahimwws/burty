import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import ModalComment from "@/widgets/comments/ui";
import { RouteProp, useRoute } from "@react-navigation/native";
import useComments from "@/features/workout/lib/hooks/useComments";
import { toast } from "@/shared/ui/Toast";
import { Comment } from "@/entities/workout/ui";
import dayjs from "dayjs";

type RouteParams = {
  MyScreen: {
    bookingId?: string
    startTime?: string
    placeName?: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;

const AddComment = () => {
  const { params: { bookingId, startTime, placeName } } = useRoute<MyScreenRouteProp>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    data: comments,
    isLoading: commentsLoading,
  } = useComments(bookingId);

  useEffect(() => {
    if (!comments?.data.length && !commentsLoading) {
      toast.show({
        type: 'error',
        description: 'No comments data'
      })
    }
  }, [comments?.data.length, commentsLoading]);

  return (
    <ScreenLayout>
      <Header
        title="Workout Detail"
        type="stack"
        right
        action={() => setShowModal(true)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
      >
        <View
          style={{
            gap: 5,
            marginVertical: "7%",
          }}
        >
          <Typography size={22} font="b">
            {placeName}
          </Typography>
          <Typography>Start {startTime}</Typography>
        </View>

        <View
          style={{
            flex: 1,
            gap: 10,
          }}
        >
          {
            comments?.data.map((item, index) => {
              return <Comment
                key={item.id}
                comment={item.comment}
                time={dayjs(item.createdAt).format("HH:mm")}
              />;
            })
          }
        </View>
      </ScrollView>
      <ModalComment
        visible={showModal}
        setVisible={setShowModal}
        bookingId={bookingId}
      />
    </ScreenLayout>
  );
};

export default AddComment;
