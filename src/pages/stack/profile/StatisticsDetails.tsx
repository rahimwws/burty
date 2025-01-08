import { View, Image, Dimensions, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";
import { colors } from "@/shared/lib/theme";
import { LargeButton } from "@/shared/ui/Button";
import ParallaxScrollView from "@/shared/ui/Animation/ParallaxView";
import { useAppNavigation } from "@/shared/lib/navigation";
import { PersonalDetails, PlaceName, ScoreStatistics, StatisticsHeader } from "@/widgets/statistics/ui";
import Typography from "@/shared/ui/Typography";

const StatisticsDetails = () => {
  const navigation = useAppNavigation();
  const { height, width } = Dimensions.get("window");
  const [comment, setComment] = useState("");

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

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
              Place name
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
          </View>
          <View style={{ marginVertical: '4%' }}>
            <PersonalDetails
              items={[
                {
                  type: "Scored a Goal",
                  score: 1,
                  timing: "12:41",
                },
                {
                  type: "Scored a Goal",
                  score: 1,
                  timing: "12:41",
                }
              ]}
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
              value={comment}
              onChangeText={(text) => setComment(text)}
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
