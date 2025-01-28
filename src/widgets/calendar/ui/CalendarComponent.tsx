import { View } from "react-native";
import React, { useState, forwardRef, useImperativeHandle, useCallback, useMemo } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { formatDate } from "../model";
import { colors } from "@/shared/lib/theme";
import { LightHeptic } from "@/shared/lib/heptics";

export type CalendarRef = {
  getRange: () => { startDate: string | null; endDate: string | null };
};

const CalendarComponent = forwardRef<CalendarRef>(({ }, ref) => {
  const [startDate, setStartDate] = useState<string | null>(formatDate(new Date()));
  const [endDate, setEndDate] = useState<string | null>(formatDate(new Date()));

  const handleDayPress = (day: DateData) => {
    LightHeptic();
    const dateString = day.dateString;

    if (!startDate || (startDate && endDate)) {
      // Start a new range
      setStartDate(dateString);
      setEndDate(null);
    } else if (!endDate) {
      // Set the end date if it's after the start date
      if (new Date(dateString) >= new Date(startDate)) {
        setEndDate(dateString);
      } else {
        // If the end date is before the start date, reset the range
        setStartDate(dateString);
        setEndDate(null);
      }
    }
  };

  useImperativeHandle(ref, () => {
    return {
      getRange() {
        return { startDate, endDate };
      },
    };
  });

  // Generate marked dates
  const markedDates = useMemo(() => {
    const marked: Record<string, any> = {};

    if (startDate) {
      const additionStyles = startDate !== endDate ? {
        borderTopLeftRadius: 11,
        borderBottomLeftRadius: 11,
        borderRadius: 0,
      } : {};
      marked[startDate] = {
        customStyles: {
          container: {
            backgroundColor: colors.primary,
            borderRadius: 11,
            width: '100%',
            ...additionStyles
          },
          text: {
            color: colors.background,
          },
        },
      };
    }

    if (endDate) {
      const additionStyles = startDate !== endDate ? {
        borderTopRightRadius: 11,
        borderBottomRightRadius: 11,
        borderRadius: 0,
      } : {};
      marked[endDate] = {
        customStyles: {
          container: {
            backgroundColor: colors.primary,
            borderRadius: 11,
            width: '100%',
            ...additionStyles
          },
          text: {
            color: colors.background,
          },
        },
      };

      // Highlight the range
      const start = new Date(startDate!);
      const end = new Date(endDate);
      for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
        const dateString = formatDate(date);
        if (dateString !== startDate && dateString !== endDate) {
          marked[dateString] = {
            customStyles: {
              container: {
                backgroundColor: colors.primary,
                borderRadius: 0,
                width: '100%',
              },
              text: {
                color: colors.background,
              },
            },
          };
        }
      }
    }

    return marked;
  }, [startDate, endDate]);

  return (
    <View style={{}}>
      <Calendar
        style={{
          height: 350,
          marginVertical: 10,
          backgroundColor: colors.dark,
          borderRadius: 25,
        }}
        current={startDate || formatDate(new Date())}
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
        markedDates={markedDates}
      />
    </View>
  );
});

export default CalendarComponent;
