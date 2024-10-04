import React, { useRef, useState, useMemo } from "react";
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
import { SearchHeader } from "@/components/header";
import PlaceCard from "@/components/card/Place";
import { useNearbySpaces } from "@/service/spaces/lib";
import { PlaceT } from "@/shared/model/types";
import { OnPressEvent } from "@rnmapbox/maps/lib/typescript/src/types/OnPressEvent";

const mapSpacesToPoints = (spaces: PlaceT[] = []) =>
  spaces.map((item) => point([item.longitude, item.latitude], { item }));

const Spaces = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedItem, setSelectedItem] = useState<null | PlaceT>(null);
  const { data, isPending } = useNearbySpaces();

  if (isPending) return null;

  const points = useMemo(() => mapSpacesToPoints(data?.data), [data?.data]);

  const handleDotPress = (event: OnPressEvent) => {
    const feature = event.features[0];
    const properties = feature?.properties;
    if (properties) setSelectedItem(properties.item);
  };

  return (
    <>
      <MapView
        style={{ flex: 1 }}
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
          <Images images={{ dot: require("@/shared/assets/images/dot.png") }} />
        </ShapeSource>

        <SearchHeader map />
      </MapView>

      <Sheet ref={bottomSheetRef} snapPoints={["30%", "70%", "100%"]}>
        <Typography styles={{ marginBottom: "5%" }}>
          {selectedItem ? "1" : data?.data.length} spaces in map area
        </Typography>

        {selectedItem ? (
          <PlaceCard type="large" item={selectedItem} />
        ) : (
          <BottomSheetScrollView
            contentContainerStyle={{ gap: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {data?.data.map((item, index) => (
              <PlaceCard type="large" item={item} key={index} />
            ))}
          </BottomSheetScrollView>
        )}
      </Sheet>
    </>
  );
};

export default Spaces;
