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
import PlayersTableList from "@/widgets/statistics/ui/PlayersTableList";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import { ScoreTablo } from "@/widgets/statistics/ui";

const AddStatistic = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <ScreenLayout>
      <Header
        title="Workout Details"
        type="stack"
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
          {
            isGameStarted &&
            <ScoreTablo />
          }
          {
            !isGameStarted &&
            <>
              <Typography size={22} font="b">
                Place name
              </Typography>
              <Typography>Start at 12:00</Typography>
            </>
          }
        </View>
        <PlayersTableList
          isGameStarted={isGameStarted}
        />
      </ScrollView>

      {
        !isGameStarted ?
          <LargeButton
            text="Start game"
            bg={colors.blue}
            textColor="light"
            type="rounded"
            action={() => setIsGameStarted(true)}
          />
          :
          <View style={{ flexDirection: 'column', gap: 10 }}>
            <LargeButton
              text="Goal"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setIsGameStarted(true)}
            />
            <LargeButton
              text="Card"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setIsGameStarted(true)}
            />
            <LargeButton
              text="Save"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setIsGameStarted(true)}
            />
            <LargeButton
              text="Corner"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setIsGameStarted(true)}
            />
          </View>
      }
      {/* <ModalComment
        visible={showModal}
        setVisible={setShowModal}
        bookingId={bookingId}
      /> */}
    </ScreenLayout>
  );
};

export default AddStatistic;
