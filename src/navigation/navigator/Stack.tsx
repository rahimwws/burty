import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Filter from "@/pages/stack/discover/Filter";
import FilteredPlaces from "@/pages/stack/discover/FilteredPlaces";
import Tabs from "../Tabs";
import PlaceDetail from "@/pages/stack/place/PlaceDetail";
import Review from "@/pages/stack/place/Review";
import CreateReview from "@/pages/stack/place/CreateReview";
import BookPass from "@/pages/stack/place/BookPass";
import BookTime from "@/pages/stack/place/BookTime";
import BookBuy from "@/pages/stack/place/BookBuy";
import Search from "@/pages/stack/map/Search";
import WorkoutDetail from "@/pages/stack/wortout/WorkoutDetail";
import EditProfile from "@/pages/stack/profile/EditProfile";
import Support from "@/pages/stack/profile/Support";
import MentorDetail from "@/pages/stack/place/MentorDetail";
import QrDetail from "@/pages/stack/scan/QrDetail";
import AddComment from "@/pages/stack/place/AddComment";

const StackScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="FilteredPlaces" component={FilteredPlaces} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="CreateReview" component={CreateReview} />
      <Stack.Screen name="BookPass" component={BookPass} />
      <Stack.Screen name="BookTime" component={BookTime} />
      <Stack.Screen name="BookBuy" component={BookBuy} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="MentorDetail" component={MentorDetail} />
      <Stack.Screen name="QrDetail" component={QrDetail} />
      <Stack.Screen name="AddComment" component={AddComment} />
    </Stack.Navigator>
  );
};

export default StackScreens;
