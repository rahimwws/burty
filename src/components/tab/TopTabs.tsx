import { View, TouchableOpacity } from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";

const TopTabs = ({
  line = false,
  items,
  onSelect,
  index = 0,
}: {
  line?: boolean;
  items: string[];
  onSelect: () => void;
  index?: number;
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 50,
          justifyContent: "center",
        }}
      >
        {items.map((item, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={onSelect}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                color={index === key ? "primary" : "light"}
                styles={{ marginBottom: 10, textTransform: "uppercase" }}
                size={18}
                font="b"
              >
                {item}
              </Typography>
              <View
                style={{
                  width: 100,
                  height: 2,
                  backgroundColor:
                    index === key ? colors.primary : "transparent",
                  borderRadius: 5,
                }}
              ></View>
            </TouchableOpacity>
          );
        })}
      </View>
      {line && (
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colors.light,
            marginBottom: "1%",
            opacity: 0.2,
          }}
        ></View>
      )}
    </View>
  );
};

export default TopTabs;
