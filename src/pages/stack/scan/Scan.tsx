import Header from "@/components/qr/Header";
import { Overlay } from "@/components/qr/Overlay";
import { useAppNavigation } from "@/shared/lib/navigation";
import Typography from "@/shared/ui/Typography";
import { useFocusEffect } from "@react-navigation/native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Scan() {
  const navigation = useAppNavigation();
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  return (
    <CameraView
      style={StyleSheet.absoluteFillObject}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
      facing={facing}
      onBarcodeScanned={(data) => navigation.navigate("QrDetail")}
    >
      <Header setFacing={setFacing} facing={facing} />
      <Overlay />
    </CameraView>
  );
}
