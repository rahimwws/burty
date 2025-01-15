import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  BackHandler,
  DeviceEventEmitter,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ScreenLayout from "@/shared/ui/Layout";
import Typography from "@/shared/ui/Typography";
import { Header } from "@/components/header";
import { useAppNavigation } from "@/shared/lib/navigation";
import { DistanceBar, FilterPrice } from "@/widgets/filter";
import { DarkButton, LargeButton } from "@/shared/ui/Button";
import { PassTypes } from "@/widgets/filter/model/types";
import { colors } from "@/shared/lib/theme";
import { PriceFromToRefT } from "@/widgets/filter/ui/Price";
import { DistanceBarRef } from "@/widgets/filter/ui/DistanceBar";


const Filter = () => {
  const navigation = useAppNavigation();

  const [type, setType] = useState("Single");
  const filterPriceRef = useRef<PriceFromToRefT | null>(null);
  const distanceRef = useRef<DistanceBarRef>(null);

  useEffect(() => { // subcribe to onPressClear event
    const subscription = DeviceEventEmitter.addListener(
      "onPressClear",
      () => {
        setType("Single");
        filterPriceRef.current?.clearValues();
        distanceRef.current?.clearValue();
      }
    );

    return () => subscription.remove();
  }, []);

  return (
    <ScreenLayout>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={0}
        enabled
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      >
        <Header type="stack" title="Filters" />
        <ScrollView>
          <View
            style={{
              marginVertical: "5%",
            }}
          >
            <DistanceBar
              ref={distanceRef}
            />
          </View>

          {/* Pass Type */}
          {/* <Typography
            styles={{ marginTop: "10%", marginBottom: "3%" }}
            align="left"
            size={18}
            font="b"
          >
            Pass type
          </Typography>
          <View
            style={{
              gap: 10,
            }}
          >
            {PassTypes.map((item, key) => {
              return (
                <DarkButton
                  isRoute={false}
                  text={item.name}
                  disabled={item.name !== type}
                  key={key}
                  action={() => setType(item.name)}
                />
              );
            })}
          </View> */}

          <FilterPrice
            ref={filterPriceRef}
          />
        </ScrollView>
        <View
          style={{
            alignSelf: "flex-end",
            marginTop: "auto",
            width: "100%",
          }}
        >
          <LargeButton
            text="Show places"
            bg={colors.light}
            type="rounded"
            action={() => {
              const { fromValue, toValue } = filterPriceRef.current!.getValues();
              const distance = distanceRef.current!.getValue();

              navigation.navigate("FilteredPlaces", {
                distance: distance,
                // passType: type,
                fromPrice: fromValue ? Number(fromValue) : undefined,
                toPrice: toValue ? Number(toValue) : undefined,
              });
              Keyboard.dismiss();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
};

export default Filter;
