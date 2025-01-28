import React, { useState, useCallback, useRef } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import StepIndicator from "@/components/pagination/StepIndicator";
import { Calendar } from "@/widgets/calendar";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import { TouchableOpacity, View, ScrollView } from "react-native";
import { LargeButton } from "@/shared/ui/Button";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useCreateBooking } from "@/features/booking";
import { useAppNavigation } from "@/shared/lib/navigation";
import { CalendarRef } from "@/widgets/calendar/ui/CalendarComponent";
import dayjs from "dayjs";
import Input from "@/shared/ui/Input";
import { toast } from "@/shared/ui/Toast";

type RouteParams = {
  MyScreen: {
    spaceId: string
    price: string | number
  };
};

type MyScreenRouteProp = RouteProp<RouteParams, "MyScreen">;

const BookTime = () => {
  const { params: { price, spaceId } } = useRoute<MyScreenRouteProp>();
  const navigation = useAppNavigation();
  const calendarRef = useRef<CalendarRef | null>(null);
  const [playersCount, setPlayersCount] = useState("");

  const times = [
    "14:00-15:00",
    "16:00-17:00",
    "18:00-19:00",
    "19:00-20:00",
    "21:00-22:00",
  ];
  const [time, setTime] = useState<string>("14:00-15:00");

  const {
    mutate: createBooking,
    isPending: creatingBooking,
  } = useCreateBooking();

  const handleCreateBooking = useCallback(() => {
    const date = calendarRef.current?.getRange();

    if (!date)
      return;

    if (!playersCount.length) {
      toast.show({
        type: "error",
        description: "Enter players count",
      })
      return;
    }

    createBooking({
      playersCount: Number(playersCount),
      spaceId,
      startDate: dayjs(date.startDate, "YYYY-MM-DD").format("DD.MM.YYYY"),
      endDate: dayjs(date.endDate, "YYYY-MM-DD").format("DD.MM.YYYY"),
      visitTime: time
    }, {
      onSuccess: (res) => {
        navigation.navigate("BookBuy", {
          price: price,
          bookingId: res.data.id
        })
      }
    })
  }, [time, spaceId, playersCount]);

  return (
    <ScreenLayout>
      <View
        style={{
          flex: 1,
        }}
      >
        <Header title="Book workout" type="stack" />
        <StepIndicator currentStep={0} steps={2} />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Typography
            styles={{ marginTop: "3%", marginBottom: "1%" }}
            align="left"
            size={18}
            font="b"
          >
            Players count
          </Typography>
          <Input
            value={playersCount}
            onChangeText={(txt) => setPlayersCount(txt)}
            type="numeric"
            placeholder=""
          />
          <Calendar ref={calendarRef} />
          <Typography
            styles={{ marginTop: "3%", marginBottom: "1%" }}
            align="left"
            size={18}
            font="b"
          >
            Time
          </Typography>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {times.map((tag, index) => {
              return (
                <TouchableOpacity
                  style={{
                    backgroundColor: time === tag ? colors.light : colors.dark,
                    padding: 10,
                    borderRadius: 5,
                  }}
                  key={index}
                  onPress={() => setTime(tag)}
                >
                  <Typography color={time === tag ? "background" : "gray"}>
                    {tag}
                  </Typography>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: "3%",
          }}
        >
          <Typography align="left" size={18} font="b">
            Total
          </Typography>
          <Typography align="right" size={22} font="black">
            ${price}
          </Typography>
        </View>
        <LargeButton
          text="Select days/time"
          type="rounded"
          bg={colors.blue}
          textColor="light"
          action={() => handleCreateBooking()}
          isLoading={creatingBooking}
        />
      </View>
    </ScreenLayout>
  );
};

export default BookTime;
