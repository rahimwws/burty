import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
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
type RouteParams = {
  MyScreen: {
    finished: boolean;
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;
const MentorDetail = () => {
  const route = useRoute<MyScreenRouteProp>();

  const { finished } = route.params;

  const { height, width } = Dimensions.get("window");
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
            <PlaceHeader role="mentor" />
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
          <PlaceInfo reserved={true} mentor />
          <PlaceLinks />
          <MentorComments />
        </View>
      </ParallaxScrollView>
      <View
        style={{
          marginBottom: "5%",
          paddingHorizontal: 20,
        }}
      >
        {!finished && (
          <LargeButton
            bg={colors.blue}
            text="Add comment"
            type="rounded"
            textColor="light"
            isRoute={false}
            action={() => navigation.navigate("AddComment")}
          />
        )}
      </View>
      {/* <Modal
        title="Cancel Workout"
        description="Are you sure you want to cancel your workout session ? This action cannot be undone."
        rightText="Cancel workout"
        visible={modalVisible}
        rightAction={() => {}}
        leftAction={() => setModalVisible(false)}
        leftText="Back"
      /> */}
    </View>
  );
};

export default MentorDetail;
