import { View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { Comment } from "@/entities/workout/ui";
import useComments from "@/features/workout/lib/hooks/useComments";
import { RouteProp, useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { toast } from "@/shared/ui/Toast";

type RouteParams = {
  MyScreen: {
    bookingId?: string
    startTime?: string
    placeName?: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;

const WorkoutDetail = () => {
  const { params: { bookingId, startTime, placeName } } = useRoute<MyScreenRouteProp>();
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
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header title="Workout Detail" type="stack" />
        <Typography
          size={22}
          font="b"
          styles={{
            marginTop: "5%",
            marginBottom: 10,
          }}
        >
          {placeName}
        </Typography>
        <Typography>Start at {startTime}</Typography>
        <View
          style={{
            marginTop: "3%",
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
    </ScreenLayout>
  );
};

export default WorkoutDetail;
