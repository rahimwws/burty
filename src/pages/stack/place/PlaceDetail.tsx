import { View, Image, Dimensions } from "react-native";
import React from "react";
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
type RouteParams = {
  MyScreen: {
    reserved: boolean;
    finished: boolean;
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const PlaceDetail = () => {
  const route = useRoute<MyScreenRouteProp>();

  const { reserved: check, finished } = route.params;

  const { height, width } = Dimensions.get("window");
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useAppNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: colors.background,
          light: colors.background,
        }}
        headerImage={
          <>
            <PlaceHeader />
            <Image
              source={require("@/shared/assets/images/bg-card.png")}
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
          <PlaceInfo reserved={check} />
          {check && <WorkoutDetail />}
          <PlaceLinks />
          {!check && <PlaceReview />}
        </View>
      </ParallaxScrollView>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 20,
        }}
      >
        {!check ? (
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
        rightAction={() => {}}
        leftAction={() => setModalVisible(false)}
        leftText="Back"
      />
    </View>
  );
};

export default PlaceDetail;
