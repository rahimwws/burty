import { View, Text, ScrollView } from "react-native";
import React from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
const WorkComment = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.dark,
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 5,
      }}
    >
      <Typography>Comment</Typography>
      <Typography>9:15</Typography>
    </View>
  );
};
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
            return <WorkComment key={index} />;
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default WorkoutDetail;
