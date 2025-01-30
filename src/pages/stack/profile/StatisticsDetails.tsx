import { View, Image, Dimensions, TextInput, Keyboard } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/shared/lib/theme";
import { LargeButton } from "@/shared/ui/Button";
import ParallaxScrollView from "@/shared/ui/Animation/ParallaxView";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PersonalDetails, PlaceName, ScoreStatistics, StatisticsHeader } from "@/widgets/statistics/ui";
import Typography from "@/shared/ui/Typography";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useMatchDetails, useStatisticDetails } from "@/features/statistics";
import useUserIdStore from "@/features/auth/model/stores/userId";
import { toast } from "@/shared/ui/Toast";

type ScreenRouteProp = RouteProp<
  {
    screen: {
      matchId: string
      personalScore: string
      startTime: string
      startDate: string
    }
  },
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

  const matchDetails = useMatchDetails(details)

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
          <Typography font="b" size={16} align="left" styles={{ marginTop: '5%' }}>
            Match Statistics
          </Typography>
          {
            matchDetails?.goal.length ?
              <View style={{ marginVertical: '4%' }}>
                <ScoreStatistics
                  name="Goals"
                  team1={{ name: matchDetails?.goal?.[0].name, score: matchDetails?.goal?.[0].score }}
                  team2={{ name: matchDetails?.goal?.[1].name, score: matchDetails?.goal?.[1].score }}
                />
              </View>
              : null
          }
          {
            matchDetails?.foul.length ?
              <View style={{ marginVertical: '4%' }}>
                <ScoreStatistics
                  name="Foul"
                  team1={{ name: matchDetails?.foul?.[0].name, score: matchDetails?.foul?.[0].score }}
                  team2={{ name: matchDetails?.foul?.[1].name, score: matchDetails?.foul?.[1].score }}
                />
              </View>
              : null
          }
          {
            details?.personalDetails.length ?
              <View style={{ marginVertical: '4%' }}>
                <PersonalDetails
                  items={details?.personalDetails || []}
                />
              </View>
              : null
          }
          {
            details?.evaluations[0]?.comments.length ?
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
              : null
          }
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
