import { View, Image, Dimensions } from "react-native";
import React, { useCallback, useEffect } from "react";
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
import useBooking from "@/features/booking/lib/hooks/useBooking";
import useCancelBooking from "@/features/booking/lib/hooks/useCancelBooking";

type RouteParams = {
  MyScreen: {
    reserved: boolean;
    finished: boolean;
    placeId?: string
    bookingId?: string
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const PlaceDetail = () => {
  const route = useRoute<MyScreenRouteProp>();

  const { reserved: check, finished, placeId, bookingId } = route.params;

  const { height, width } = Dimensions.get("window");
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useAppNavigation();

  const {
    data,
    isLoading,
  } = useSpaceDetails(placeId);
  const {
    data: booking,
    isLoading: bookingLoading,
  } = useBooking(bookingId);
  const {
    mutate: cancelBooking
  } = useCancelBooking();

  useEffect(() => {
    if (placeId && !Object.keys(data?.data || {}).length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No place details data'
      })
    }
  }, [placeId, data?.data, isLoading]);
  useEffect(() => {
    if (bookingId && !Object.keys(booking?.data || {}).length && !bookingLoading) {
      toast.show({
        type: 'error',
        description: 'No workout data'
      })
    }
  }, [bookingId, booking?.data, bookingLoading]);

  const handleCancelBooking = useCallback((bookingId?: string) => {
    setModalVisible(false);
    if (bookingId)
      cancelBooking(bookingId, {
        onSuccess: () => {
          toast.show({
            type: 'success',
            description: "Successfully canceled reservation"
          });
          navigation.goBack();
        },
        onError: () => {
          toast.show({
            type: "error",
            description: "Cannot cancel reservation"
          })
        }
      })
  }, []);

  const spaceDetail = booking?.data.spaces || data?.data

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
            reserved={check}
            place={spaceDetail}
          />
          {
            check &&
            <WorkoutDetail
              date={booking?.data.startDate}
              passType={booking?.data.passType}
              price={booking?.data.price}
              status={booking?.data.status}
            />
          }
          <PlaceLinks
            address={spaceDetail?.address}
            link={spaceDetail?.site}
            phoneNumber={spaceDetail?.phoneNumber}
            workTime={`${dayjs(spaceDetail?.openTime).format('h:mm A')} - ${dayjs(spaceDetail?.endTime).format('h:mm A')}`}
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
        rightAction={() => handleCancelBooking(booking?.data.id)}
        leftAction={() => setModalVisible(false)}
        leftText="Back"
      />
    </View>
  );
};

export default PlaceDetail;
