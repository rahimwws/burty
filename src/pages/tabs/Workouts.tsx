import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import ScreenLayout from "@/shared/ui/Layout";
import { MentorPlace, PlaceCard } from "@/components/card";
import useRoleStore from "@/shared/store/role";
import { Type } from "@/features/workout/ui";
import { useBookings } from "@/features/booking";
import { toast } from "@/shared/ui/Toast";
import { colors } from "@/shared/lib/theme";


const Workouts = () => {
  const [time, setTime] = useState<7 | 30 | 90>(7);
  const role = useRoleStore((store) => store.role);

  const {
    data: bookings,
    isLoading: bookginsLoading,
  } = useBookings(time);

  useEffect(() => {
    if (!bookings?.data.length && !bookginsLoading) {
      toast.show({
        type: 'error',
        description: 'No workouts data'
      })
    }
  }, [bookings?.data.length]);

  return (
    <ScreenLayout>
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title={role === "mentor" ? "Matches history" : "Workouts"}
          type="default"
        />
        {role === "user" && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <Type
              text="This week"
              active={time === 7}
              onPress={() => setTime(7)}
            />
            <Type
              text="This month"
              active={time === 30}
              onPress={() => setTime(30)}
            />
            <Type
              text="Last 3 months"
              active={time === 90}
              onPress={() => setTime(90)}
            />
          </View>
        )}
        <View
          style={{
            flex: 1,
            gap: 20,
            marginVertical: "5%",
          }}
        >
          {role === "mentor" ? (
            <>
              <MentorPlace type="large" />
              <MentorPlace type="large" />
              <MentorPlace type="large" used />
              <MentorPlace type="large" used />
            </>
          ) : (
            bookginsLoading ?
              <ActivityIndicator color={colors.primary} />
              :
              bookings?.data.map(item => {
                return (
                  <PlaceCard
                    key={item.id}
                    type="large"
                    item={item.spaces}
                    startDate={item.startDate}
                    startTime={item.startTime}
                    reserved
                  />
                )
              })
          )}
        </View>
      </ScrollView>
    </ScreenLayout >
  );
};

export { Workouts as WorkoutScreen };
