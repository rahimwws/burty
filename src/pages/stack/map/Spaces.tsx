import React, { useRef, useState, useMemo, useEffect } from "react";
import {
  Camera,
  Images,
  LocationPuck,
  MapView,
  ShapeSource,
  SymbolLayer,
} from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { Sheet } from "@/shared/ui/Sheets";
import Typography from "@/shared/ui/Typography";
import { PlaceCard } from "@/components/card";
import { useNearbySpaces } from "@/features/spaces/";
import { PlaceT } from "@/shared/model/types";
import { OnPressEvent } from "@rnmapbox/maps/lib/typescript/src/types/OnPressEvent";
import { toast } from "@/shared/ui/Toast";
import { SearchInput } from "@/features/search/ui";
import { ActivityIndicator } from "react-native";
import { colors } from "@/shared/lib/theme";

const mapSpacesToPoints = (spaces: PlaceT[] = []) =>
  spaces.map((item) => point([item.longitude, item.latitude], { item }));

const Spaces = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedItem, setSelectedItem] = useState<null | PlaceT>(null);
  const { data, isPending, isLoading } = useNearbySpaces();

  useEffect(() => {
    if (!data?.data.length && !isLoading) {
      toast.show({
        type: 'error',
        description: 'No spaces data'
      })
    }
  }, [data?.data.length]);

  const points = useMemo(() => mapSpacesToPoints(data?.data), [data?.data]);

  const handleDotPress = (event: OnPressEvent) => {
    const feature = event.features[0];
    const properties = feature?.properties;
    if (properties) setSelectedItem(properties.item);
  };

  return (
    <>
      <SearchInput map />
      <MapView
        style={{ flex: 1, zIndex: -1 }}
        styleURL="mapbox://styles/mapbox/dark-v11"
        logoEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
      >
        <Camera followUserLocation followZoomLevel={16} />
        <LocationPuck
          puckBearingEnabled
          puckBearing="heading"
          pulsing={{ isEnabled: true }}
        />

        {/* ShapeSource with points containing properties */}
        <ShapeSource
          id="dots"
          shape={featureCollection(points)}
          cluster
          onPress={handleDotPress}

        >
          <SymbolLayer
            id="dot-icon"
            style={{
              iconImage: "dot",
              iconSize: 0.5,
              iconAllowOverlap: true,
              iconAnchor: "bottom",
            }}
          />
          <Images images={{
            dot: require("@/shared/assets/images/dot.png"),
            "selected-dot": require("@/shared/assets/images/bg.png")
          }} />
        </ShapeSource>

      </MapView>

      <Sheet ref={bottomSheetRef} snapPoints={["30%", "70%", "100%"]}>
        <Typography styles={{ marginBottom: "5%" }}>
          {selectedItem ? "1" : data?.data.length} spaces in map area
        </Typography>

        {selectedItem ? (
          <PlaceCard type="large" item={selectedItem} />
        ) : (
          <BottomSheetScrollView
            contentContainerStyle={{
              gap: 20,
              paddingBottom: '18%'
            }}
            style={{
            }}
            showsVerticalScrollIndicator={false}
          >
            {
              isLoading ?
                <ActivityIndicator color={colors.primary} />
                :
                data?.data.map((item, index) => (
                  <PlaceCard type="large" item={item} key={index} />
                ))
            }
          </BottomSheetScrollView>
        )}
      </Sheet>
    </>
  );
};

export default Spaces;
