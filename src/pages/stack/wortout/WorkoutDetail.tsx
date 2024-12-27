import { View, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { Comment } from "@/entities/workout/ui";

const WorkoutDetail = () => {
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
          Place name
        </Typography>
        <Typography>Start at 12:00</Typography>
        <View
          style={{
            marginTop: "3%",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 7, 7].map((item, index) => {
            return <Comment comment="adf" time="05:10" key={index} />;
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default WorkoutDetail;
