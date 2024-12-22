import { View, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@/shared/lib/theme";
import {
  PlaceHeader,
  PlaceInfo,
  PlaceLinks,
  PlaceReview,
  WorkoutDetail,
} from "@/widgets/place";
import { LargeButton } from "@/shared/ui/Button";
import ParallaxScrollView from "@/shared/ui/Animation/ParallaxView";
import { RouteProp, useRoute } from "@react-navigation/native";
import Modal from "@/shared/ui/Modal";
import { useAppNavigation } from "@/shared/lib/navigation";
import { useSpaceDetails } from "@/features/spaces";
import dayjs from 'dayjs';
import { toast } from "@/shared/ui/Toast";

type RouteParams = {
  MyScreen: {
    reserved: boolean;
    finished: boolean;
    placeId: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const PlaceDetail = () => {
  const route = useRoute<MyScreenRouteProp>();

  const { reserved: check, finished, placeId } = route.params;

  const { height, width } = Dimensions.get("window");
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useAppNavigation();

  const {
    data,
    isLoading,
    isPending,
  } = useSpaceDetails(placeId);

  useEffect(() => {
    if (!Object.keys(data?.data || {}).length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No place details data'
      })
    }
  }, [data?.data]);

  if (!isLoading && isPending) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: colors.background,
          light: colors.background,
        }}
        headerImage={
          <>
            <PlaceHeader link={data?.data.site || ''} />
            <Image
              source={
                data?.data.medias?.[0].filePath ?
                  { uri: data?.data.medias?.[0].filePath }
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
            reserved={check}
            place={data?.data}
          />
          {/* {check && <WorkoutDetail />} */}
          <PlaceLinks
            address={data?.data.address}
            link={data?.data.site}
            phoneNumber={data?.data.phoneNumber}
            workTime={`${dayjs(data?.data.openTime).format('h:mm A')} - ${dayjs(data?.data.endTime).format('h:mm A')}`}
          />
          {!check && <PlaceReview spaceId={placeId} />}
        </View>
      </ParallaxScrollView>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 20,
        }}
      >
        {!check ? ( // TODO need to handle check and finished
          <LargeButton
            bg={colors.blue}
            text="Book Place"
            type="rounded"
            textColor="light"
            isRoute
            route="BookPass"
          />
        ) : !finished ? (
          <LargeButton
            bg={colors.error}
            text="Cancel Reservation"
            type="rounded"
            textColor="error"
            isRoute={false}
            theme="outline"
            action={() => setModalVisible(true)}
          />
        ) : (
          <LargeButton
            bg={colors.primary}
            text="Detail of Workouts"
            type="rounded"
            textColor="primary"
            isRoute={false}
            theme="outline"
            action={() => navigation.navigate("WorkoutDetail")}
          />
        )}
      </View>
      <Modal
        title="Cancel Workout"
        description="Are you sure you want to cancel your workout session ? This action cannot be undone."
        rightText="Cancel workout"
        visible={modalVisible}
        rightAction={() => { }}
        leftAction={() => setModalVisible(false)}
        leftText="Back"
      />
    </View>
  );
};

export default PlaceDetail;
