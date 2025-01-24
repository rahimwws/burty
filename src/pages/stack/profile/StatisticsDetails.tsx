import { View, Image, Dimensions, TextInput, Keyboard } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { colors } from "@/shared/lib/theme";
import { LargeButton } from "@/shared/ui/Button";
import ParallaxScrollView from "@/shared/ui/Animation/ParallaxView";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PersonalDetails, PlaceName, ScoreStatistics, StatisticsHeader } from "@/widgets/statistics/ui";
import Typography from "@/shared/ui/Typography";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MatchAction, getStringByMatchAction, useStatisticDetails } from "@/features/statistics";
import useUserIdStore from "@/features/auth/model/stores/userId";
import { toast } from "@/shared/ui/Toast";
import getTimeOnly from "@/shared/lib/utils/getTimeOnly";
import usePersonalDetails from "@/features/statistics/lib/hooks/usePersonalDetails";

type ScreenRouteProp = RouteProp<
  { screen: { matchId: string } },
  "screen"
>;

const StatisticsDetails = () => {
  const { params: { matchId } } = useRoute<ScreenRouteProp>();
  const navigation = useAppNavigation();
  const { id: userId } = useUserIdStore()
  const { height, width } = Dimensions.get("window");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const {
    data,
    isLoading
  } = useStatisticDetails({
    matchId, userId
  })
  const details = data?.data;

  useEffect(() => {
    if (!Object.keys(data?.data || {}).length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No profile data'
      })
    }
  }, [data?.data]);

  const personalDetails = usePersonalDetails(details)

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: colors.background,
          light: colors.background,
        }}
        headerImage={
          <>
            <StatisticsHeader
              personalScore={8}
              startTime="13:00"
              startDate="12.02.2024"
              shareLink=""
            />
            <PlaceName>
              {details?.space.name}
            </PlaceName>
            <Image
              source={
                details?.space?.medias?.[0].filePath ?
                  { uri: details?.space?.medias?.[0].filePath }
                  :
                  require("@/shared/assets/images/bg-card.png")
              }
              style={{
                width,
                height: height / 2.3,
              }}
              resizeMode="cover"
            />
          </>
        }
      >
        <View
          style={{
            backgroundColor: colors.background,
            zIndex: 1,
            marginTop: "-10%",
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: "5%",
            paddingBottom: "15%",
          }}
        >
          {/* <Typography font="b" size={16} align="left" styles={{ marginTop: '5%' }}>
            Match Statistics
          </Typography>
          <View style={{ marginVertical: '4%' }}>
            <ScoreStatistics
              name="Goals"
              team1={{ name: "Team 1", score: 1 }}
              team2={{ name: "Team 2", score: 2 }}
            />
          </View>
          <View style={{ marginVertical: '4%' }}>
            <ScoreStatistics
              name="Substitutions"
              team1={{ name: "Team 1", score: 2 }}
              team2={{ name: "Team 2", score: 1 }}
            />
          </View>
          <View style={{ marginVertical: '4%' }}>
            <ScoreStatistics
              name="Foul"
              team1={{ name: "Team 1", score: 1 }}
              team2={{ name: "Team 2", score: 3 }}
            />
          </View> */}
          <View style={{ marginVertical: '4%' }}>
            <PersonalDetails
              items={personalDetails}
            />
          </View>
          <View style={{ marginVertical: '2%' }}>
            <Typography font="b" size={16} align="left" styles={{ marginBottom: '3%' }}>
              Mentor’s comment
            </Typography>
            <TextInput
              style={{
                backgroundColor: colors.dark,
                height: "40%",
                padding: 10,
                borderRadius: 8,
                color: colors.light,
                fontFamily: "m",
                textAlignVertical: 'top',
              }}
              multiline={true}
              returnKeyType="done"
              onSubmitEditing={dismissKeyboard}
              placeholder="Text you comment here..."
              placeholderTextColor={colors.gray}
              value={details?.evaluations[0]?.comments}
            />
          </View>
        </View>
      </ParallaxScrollView>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 20,
        }}
      >
        <LargeButton
          text="Cancel"
          type="rounded"
          bg={colors.primary}
          theme="outline"
          textColor="primary"
        />
      </View>
    </View>
  );
};

export default StatisticsDetails;
