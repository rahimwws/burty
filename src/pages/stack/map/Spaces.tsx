import React, { useRef, useState } from "react";
import {
  Camera,
  Images,
  LocationPuck,
  MapView,
  ShapeSource,
  SymbolLayer,
} from "@rnmapbox/maps";
import { featureCollection, point } from "@turf/helpers";
import mapdottes from "@/shared/config/mapdottes";
import { Sheet } from "@/shared/ui/Sheets";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import Typography from "@/shared/ui/Typography";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { SearchHeader } from "@/components/header";
import PlaceCard from "@/components/card/Place";
const Spaces = () => {
  const points = mapdottes.map((dot) => point([dot.long, dot.lat]));
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedItem, setSelectedItem] = useState<null | any>(null);
  return (
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
      <ShapeSource
        id="dots"
        shape={featureCollection(points)}
        cluster
        onPress={(event) => {
          console.log(event.coordinates);
          setSelectedItem(event.coordinates);
        }}
      >
        <SymbolLayer
          style={{
            iconImage: "dot",
            iconSize: 0.5,
            iconAllowOverlap: true,
            iconAnchor: "bottom",
          }}
          id="dot-icon"
        />
        <Images images={{ dot: require("@/shared/assets/images/dot.png") }} />
      </ShapeSource>
      <SearchHeader map />
      <Sheet ref={bottomSheetRef} snapPoints={["30%", "70%", "100%"]}>
        <Typography styles={{ marginBottom: "5%" }}>
          23 spaces in map area
        </Typography>
        {!selectedItem ? (
          <BottomSheetScrollView
            contentContainerStyle={{ gap: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <PlaceCard type="large" />
            <PlaceCard type="large" />
            <PlaceCard type="large" />
            <PlaceCard type="large" />
            <PlaceCard type="large" />
          </BottomSheetScrollView>
        ) : (
          <PlaceCard type="large" />
        )}
      </Sheet>
    </MapView>
  );
};

export default Spaces;
