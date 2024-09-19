import {
  View,
  Dimensions,
  ImageSourcePropType,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import Typography from "@/shared/ui/Typography";

type Props = {
  image: ImageSourcePropType;
  title: string;
  description: string;
  scrollX: any;
};

const Cart = ({ title, description, image, scrollX }: Props) => {
  const { width, height } = Dimensions.get("screen");
  return (
    <ImageBackground
      source={image}
      style={{
        height,
        flex: 1,
      }}
      resizeMode="contain"
    >
      <View
        style={{
          width: width,
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 40,
        }}
      >
        <View
          style={{
            height: height * 0.65,
          }}
        ></View>
        <Typography size={30} font="m" styles={{ marginBottom: 20 }}>
          {title}
        </Typography>
        <Typography size={18}>{description}</Typography>
      </View>
    </ImageBackground>
  );
};

export default Cart;
