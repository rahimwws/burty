import { View } from "react-native";
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { formatDate } from "../model";
import { colors } from "@/shared/lib/theme";
import { LightHeptic } from "@/shared/lib/heptics";

export type CalendarRef = {
  getDate: () => string
}

const CalendarComponent = forwardRef<CalendarRef>(({ }, ref) => {
  const [currentDate, setCurrentDate] = useState<string>(
    formatDate(new Date())
  );
  const handleDayPress = (day: DateData) => {
    LightHeptic();
    const dateString = day.dateString;
    setCurrentDate(dateString);
  };

  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return currentDate;
      }
    }
  })

  return (
    <View>
      <Calendar
        style={{
          height: 350,
          marginVertical: 10,
          backgroundColor: colors.dark,
          borderRadius: 25,
        }}
        current={currentDate}
        onDayPress={handleDayPress}
        markingType={"custom"}
        theme={{
          todayTextColor: colors.primary,
          textDayFontFamily: "m",
          textMonthFontFamily: "r",
          textDayHeaderFontFamily: "m",
          arrowColor: colors.light,
          calendarBackground: colors.dark,
          dayTextColor: colors.light,
          monthTextColor: colors.light,
          selectedDayBackgroundColor: colors.primary,
          textMonthFontSize: 18,
        }}
        markedDates={{
          [currentDate]: {
            customStyles: {
              container: {
                backgroundColor: colors.primary,
                borderRadius: 11,
              },
              text: {
                color: colors.background,
              },
            },
          },
        }}
      />
    </View>
  );
});

export default CalendarComponent;
