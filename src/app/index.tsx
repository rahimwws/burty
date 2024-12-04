import React from "react";
import { AppProvider } from "./providers";
import { AppNavigation } from "@/pages";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <AppProvider>
      <AppNavigation />
      <StatusBar style="light" />
    </AppProvider>
  );
}
