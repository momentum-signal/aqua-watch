import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { AppLogo } from "@/assets/icons/icons";

export default function AppHeader() {
  return (
    <ThemedView style={[styles.container]}>
      {/* <AppLogo /> */}
      <ThemedText style={[styles.text]}>Aqua Watch</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "font-serif",
    letterSpacing: -1,
  },
});
