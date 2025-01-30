import { View, Text } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import dayjs from "dayjs";

type WorkoutProps = {
  /** @default true */
  showTitle?: boolean
  date?: string
  passType?: string
  price?: number
  status?: string
}

const Workout = ({
  showTitle = true,
  date,
  passType,
  price,
  status
}: WorkoutProps) => {

  return (
    <View>
      {showTitle && (
        <Typography
          size={22}
          font="m"
          align="left"
          styles={{ marginBottom: "3%" }}
        >
          Workout details
        </Typography>
      )}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <Typography size={18} font="b">
          Date
        </Typography>
        <Typography color="gray" font="m">
          {dayjs(date).format('DD MMM, YYYY')}
        </Typography>
      </View>
      {
        passType ?
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            <>
              <Typography size={18} font="b">
                Pass type
              </Typography>
              <Typography color="gray" font="m">
                {passType} visit
              </Typography>
            </>
          </View>
          : null
      }
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <Typography size={18} font="b">
          Price
        </Typography>
        <Typography color="gray" font="m">
          {Math.round(price || 0)}$
        </Typography>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "5%",
        }}
      >
        <Typography size={18} font="b">
          Status
        </Typography>
        <View
          style={{
            padding: 5,
            paddingHorizontal: 10,
            backgroundColor: colors.primary,
            borderRadius: 3,
          }}
        >
          <Typography color="background" font="m" styles={{ textTransform: 'capitalize' }}>
            {status}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default Workout;
