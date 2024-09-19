import { View, FlatList, Animated } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Slide, slides } from "@/shared/config/slides";
import Cart from "../card/OnboardingCard";
import OnBoardingPagination from "../pagination/OnBoardingPagination";

const OnBoardingList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<Slide>>(null);
  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);
  return (
    <>
      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <Cart
            description={item.description}
            title={item.title}
            image={item.image}
            scrollX={scrollX}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        ref={slidesRef}
      />
      <OnBoardingPagination data={slides} scrollX={scrollX} />
    </>
  );
};

export default OnBoardingList;
