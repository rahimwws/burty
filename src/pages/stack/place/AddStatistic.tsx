import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import PlayersTableList from "@/widgets/statistics/ui/PlayersTableList";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import { ModalSelectAssistendPlayer, ModalSelectFoulCard, ModalSelectPlayer, ModalSelectTeam, ScoreTablo } from "@/widgets/statistics/ui";

const AddStatistic = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showSelectGoalPlayer, setShowSelectGoalPlayer] = useState(false);
  const [showAssistancePlayer, setShowAssistancePlayer] = useState(false);
  const [showSelectFoulCard, setShowSelectFoulCard] = useState(false);
  const [showSelectTeam, setShowSelectTeam] = useState(false);


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
              action={() => setShowSelectTeam(true)}
            />
            <LargeButton
              text="Card"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setShowSelectFoulCard(true)}
            />
            <LargeButton
              text="Save"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setShowSelectGoalPlayer(true)}
            />
            <LargeButton
              text="Corner"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => { setShowAssistancePlayer(true) }}
            />
          </View>
      }
      <ModalSelectTeam
        visible={showSelectTeam}
        onClose={() => setShowSelectTeam(false)}
      />
      <ModalSelectFoulCard
        visible={showSelectFoulCard}
        onClose={() => setShowSelectFoulCard(false)}
      />
      <ModalSelectPlayer
        visible={showSelectGoalPlayer}
        onClose={() => setShowSelectGoalPlayer(false)}
        onPressGoalPass={() => { }}
        onPressMarkAsOwnGoal={() => { }}
      />
      <ModalSelectAssistendPlayer
        visible={showAssistancePlayer}
        onClose={() => setShowAssistancePlayer(false)}
      />
    </ScreenLayout>
  );
};

export default AddStatistic;
