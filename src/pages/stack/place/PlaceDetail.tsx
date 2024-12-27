import { View, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/shared/lib/theme";
import {
  PlaceHeader,
  PlaceInfo,
  PlaceLinks,
  PlaceReview,
} from "@/widgets/place";
import { LargeButton } from "@/shared/ui/Button";
import ParallaxScrollView from "@/shared/ui/Animation/ParallaxView";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useSpaceDetails } from "@/features/spaces";
import dayjs from 'dayjs';
import { toast } from "@/shared/ui/Toast";

type RouteParams = {
  MyScreen: {
    placeId: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const PlaceDetail = () => {
  const route = useRoute<MyScreenRouteProp>();

  const { placeId } = route.params;
  const { height, width } = Dimensions.get("window");

  const {
    data,
    isLoading,
  } = useSpaceDetails(placeId);

  useEffect(() => {
    if (!Object.keys(data?.data || {}).length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No place details data'
      })
    }
  }, [placeId, data?.data, isLoading]);

  const spaceDetail = data?.data

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: colors.background,
          light: colors.background,
        }}
        headerImage={
          <>
            <PlaceHeader link={spaceDetail?.site || ''} />
            <Image
              source={
                spaceDetail?.medias?.[0].filePath ?
                  { uri: spaceDetail?.medias?.[0].filePath }
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
            place={spaceDetail}
          />
          <PlaceLinks
            address={spaceDetail?.address}
            link={spaceDetail?.site}
            phoneNumber={spaceDetail?.phoneNumber}
            workTime={`${dayjs(spaceDetail?.openTime).format('h:mm A')} - ${dayjs(spaceDetail?.endTime).format('h:mm A')}`}
          />
          <PlaceReview reviews={data?.data?.reviews} spaceId={spaceDetail?.id} />
        </View>
      </ParallaxScrollView>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 20,
        }}
      >
        <LargeButton
          bg={colors.blue}
          text="Book Place"
          type="rounded"
          textColor="light"
          isRoute
          route="BookPass"
        />
      </View>
    </View>
  );
};

export default PlaceDetail;
