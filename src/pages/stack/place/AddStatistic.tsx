import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import PlayersTableList from "@/widgets/statistics/ui/PlayersTableList";
import { LargeButton } from "@/shared/ui/Button";
import { colors } from "@/shared/lib/theme";
import { ModalSelectFoulCard, ModalSelectPlayer, ModalSelectTeam, ScoreTablo } from "@/widgets/statistics/ui";
import Modal from "@/shared/ui/Modal";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useMatch } from "@/features/mentor";
import { MatchAction, useMatchDetails } from "@/features/statistics";
import useCompleteMatch from "@/features/mentor/lib/hooks/useCompleteMatch";
import TeamT from "@/features/statistics/model/types/TeamT";
import useMatchAction from "@/features/mentor/lib/hooks/useMatchAction";
import { useAppNavigation } from "@/shared/lib/navigation";

type RouteParams = {
  MyScreen: {
    matchId: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;

const AddStatistic = () => {
  const navigation = useAppNavigation();
  const { params: { matchId } } = useRoute<MyScreenRouteProp>();
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showSelectPlayer, setShowSelectPlayer] = useState(false);
  const [showSelectFoulCard, setShowSelectFoulCard] = useState(true);
  const [showSelectTeam, setShowSelectTeam] = useState(false);
  const [showCompleteMatch, setShowCompleteMatch] = useState(false);
  const [fouledPlayer, setFouledPlayer] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<MatchAction>();

  const [selectedTeam, setSelectedTeam] = useState<TeamT>();

  const {
    data: match,
  } = useMatch(matchId);
  const {
    mutate: createMatchAction,
  } = useMatchAction(matchId);
  const {
    mutate: completeMatch,
    isPending: completeMatchProcessing
  } = useCompleteMatch(matchId);

  const handleCompleteMatch = () => {
    setShowCompleteMatch(false);
    completeMatch({ matchId }, {
      onSuccess: () => {
        navigation.goBack();
      }
    });
  }

  const handleSelectTeam = (team: TeamT) => {
    setSelectedTeam(team);
    setShowSelectTeam(false);
    setShowSelectPlayer(true);
  }

  const handleSelectPlayer = (player: TeamT["matchPlayers"][number]) => {
    switch (selectedAction) {
      case "GOAL":
        createMatchAction({ matchId, playerId: player.users?.[0].id, matchAction: 'GOAL' })
        break;

      case "ASSIST":
        createMatchAction({ matchId, playerId: player.users?.[0].id, matchAction: "ASSIST" })
        break;

      case "SAVE":
        createMatchAction({ matchId, playerId: player.users?.[0].id, matchAction: "SAVE" })
        break;

      case "YELLOW_CARD":
        setShowSelectFoulCard(true);
        setFouledPlayer(player.users?.[0].id);
        break;

      default:
        break;
    }
  }

  const handleSelectFoulCard = (action: MatchAction) => {
    setShowSelectFoulCard(false);
    createMatchAction({ matchId, matchAction: action, playerId: fouledPlayer! })
  }

  const scoreTable = useMatchDetails(match?.data.team)

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
            <ScoreTablo
              teams={scoreTable.goal}
            />
          }
          {
            !isGameStarted &&
            <>
              <Typography size={22} font="b">
                {match?.data.space.name}
              </Typography>
              {/* <Typography>Start at 12:00</Typography> */}
            </>
          }
        </View>
        {
          !isGameStarted &&
          <PlayersTableList
            teams={match?.data.team.map(item => {
              return {
                name: item.teamName,
                players: item.matchPlayers.map(player => {
                  return {
                    name: `${player.users?.[0].firstName ?? " "}${player.users?.[0].lastName ?? ""}`
                  }
                })
              }
            })}
          />
        }
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
              action={() => {
                setShowSelectTeam(true);
                setSelectedAction("GOAL");
              }}
            />
            <LargeButton
              text="Assist"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => {
                setShowSelectTeam(true);
                setSelectedAction("ASSIST");
              }}
            />
            <LargeButton
              text="Card"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => {
                setShowSelectTeam(true);
                setSelectedAction("YELLOW_CARD");
              }}
            />
            <LargeButton
              text="Save"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => {
                setShowSelectTeam(true);
                setSelectedAction("SAVE");
              }}
            />
            <LargeButton
              text="Complete match"
              bg={colors.light}
              textColor="dark"
              type="rounded"
              action={() => setShowCompleteMatch(true)}
              isLoading={completeMatchProcessing}
            />
          </View>
      }
      <ModalSelectTeam
        visible={showSelectTeam}
        onClose={() => setShowSelectTeam(false)}
        teams={match?.data.team}
        onSelectTeam={handleSelectTeam}
      />
      <ModalSelectFoulCard
        visible={showSelectFoulCard}
        onClose={handleSelectFoulCard}
      />
      <ModalSelectPlayer
        visible={showSelectPlayer}
        onClose={() => setShowSelectPlayer(false)}
        players={selectedTeam?.matchPlayers}
        onSelectPlayer={handleSelectPlayer}
      />
      <Modal
        title="Complete match"
        description="Are you sure you want to end the match?"
        leftText="No"
        rightText="Yes"
        leftAction={() => setShowCompleteMatch(false)}
        rightAction={() => handleCompleteMatch()}
        visible={showCompleteMatch}
      />
    </ScreenLayout>
  );
};

export default AddStatistic;
