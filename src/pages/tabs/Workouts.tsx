import { View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import ScreenLayout from "@/shared/ui/Layout";
import { MentorPlaceCard } from "@/widgets/place";
import useRoleStore from "@/shared/store/role";
import { Type } from "@/features/workout/ui";
import { useBookings } from "@/features/booking";
import { toast } from "@/shared/ui/Toast";
import { colors } from "@/shared/lib/theme";
import isTimeOver from "@/shared/lib/utils/isTimeOver";
import { PlaceCard } from "@/widgets/place";
import getDateOnly from "@/shared/lib/utils/getDateOnly";

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
              <MentorPlaceCard type="large" />
              <MentorPlaceCard type="large" />
              <MentorPlaceCard type="large" used />
              <MentorPlaceCard type="large" used />
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
                    startDate={getDateOnly(item.startDate, "DD.MM.YYYY")}
                    startTime={item.startTime}
                    bookingId={item.id}
                    used={isTimeOver({ startDate: item.startDate, endTime: item.endTime })}
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
