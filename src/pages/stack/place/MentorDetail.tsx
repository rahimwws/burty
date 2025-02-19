import { View, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useAppNavigation } from "@/shared/lib/navigation";
import ParallaxScrollView from "@/shared/ui/Animation/ParallaxView";
import { colors } from "@/shared/lib/theme";
import {
  MentorComments,
  PlaceHeader,
  PlaceInfo,
  PlaceLinks,
} from "@/widgets/place";
import { LargeButton } from "@/shared/ui/Button";
import { toast } from "@/shared/ui/Toast";
import useLinkedSpace from "@/features/mentor/lib/hooks/useLinkedSpace";
import { useMatch } from "@/features/mentor";
import { useMatchDetails } from "@/features/statistics";
import getTimeOnly from "@/shared/lib/utils/getTimeOnly";

type RouteParams = {
  MyScreen: {
    finished: boolean
    matchId: string;
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const MentorDetail = () => {
  const route = useRoute<MyScreenRouteProp>();

  const { finished, matchId } = route.params;

  const { height, width } = Dimensions.get("window");
  const navigation = useAppNavigation();

  const {
    data: match,
    isLoading: matchLoading
  } = useMatch(matchId);

  useEffect(() => {
    if (!Object.keys(match?.data || {}).length && !matchLoading) {
      toast.show({
        type: 'error',
        description: 'No linked place details data'
      })
    }
  }, [matchId, match?.data, matchLoading]);

  const matchDetails = match?.data;

  const scoreTable = useMatchDetails(match?.data.team)

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: colors.background,
          light: colors.background,
        }}
        headerImage={
          <>
            <PlaceHeader role="mentor" link="" />
            <Image
              source={
                matchDetails?.space?.medias?.[0]?.filePath ?
                  { uri: matchDetails?.space?.medias?.[0]?.filePath }
                  :
                  require("@/shared/assets/images/bg-card.png")
              }
              style={{
                width,
                height: height / 3,
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
          }}
        >
          <PlaceInfo
            place={matchDetails?.space}
            reserved={true}
            mentor
          />
          {
            scoreTable && matchDetails ?
              <PlaceLinks
                isMentor
                link={`Goals: ${scoreTable?.goal?.[0]?.score + scoreTable?.goal?.[1]?.score || 0}`}
                address={`Foul: ${scoreTable?.foul?.[0]?.score + scoreTable?.foul?.[1]?.score || 0}`}
                workTime={`${getTimeOnly(matchDetails?.space?.openTime ?? '', 'HH:mm')} - ${getTimeOnly(matchDetails?.space?.endTime ?? '', 'HH:mm')}`}
              />
              : null
          }
          {/* <MentorComments /> */}
        </View>
      </ParallaxScrollView>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 20,
        }}
      >
        {
          match?.data.id ?
            !finished &&
            <View style={{ flexDirection: 'column', gap: 8 }}>
              <LargeButton
                bg={colors.blue}
                text="Finish Statistics"
                type="rounded"
                textColor="light"
                theme="outline"
                isRoute={false}
                action={() => navigation.goBack()}
              />
              <LargeButton
                bg={colors.blue}
                text="Add statistic"
                type="rounded"
                textColor="light"
                isRoute={false}
                action={() => navigation.navigate("AddStatistic", { matchId: match?.data.id })}
              />
            </View>
            : null
        }
      </View>
    </View>
  );
};

export default MentorDetail;
