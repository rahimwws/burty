import React, { useState } from "react";
import {
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import ScreenLayout from "@/shared/ui/Layout";
import { Header } from "@/components/header";
import Typography from "@/shared/ui/Typography";
import { colors } from "@/shared/lib/theme";
import ReviewStar from "@/shared/assets/icons/interface/ReviewStar";
import { LargeButton } from "@/shared/ui/Button";

const CreateReview = () => {
  const [rating, setRating] = useState<number>(0);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleStarPress = (star: number) => {
    setRating(star);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1 }}>
        <ScreenLayout>
          <Header title="Review" type="stack" />

          <Typography
            size={20}
            font="m"
            align="left"
            styles={{ marginVertical: "5%" }}
          >
            Add Review
          </Typography>
          <TextInput
            style={{
              backgroundColor: colors.dark,
              height: "40%",
              fontSize: 18,
              padding: 10,
              borderRadius: 8,
              color: colors.light,
              fontFamily: "m",
            }}
            multiline={true}
            returnKeyType="done"
            onSubmitEditing={dismissKeyboard}
            placeholder="Text you message here..."
            placeholderTextColor={colors.gray}
          />

          <Typography
            size={20}
            font="m"
            align="left"
            styles={{ marginVertical: "5%" }}
          >
            Rate this place
          </Typography>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleStarPress(star)}
              >
                <ReviewStar
                  size={40}
                  fill={star <= rating ? colors.primary : colors.light}
                  theme={star <= rating ? "filled" : "outline"}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              marginTop: "auto",
              width: "100%",
            }}
          >
            <LargeButton
              bg={colors.light}
              text="Add Review"
              type="rounded"
              theme="outline"
              textColor="light"
              isRoute
              route="Review"
            />
          </View>
        </ScreenLayout>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateReview;
