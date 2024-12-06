import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "../ThemedText";

export default function LastUpdatedTime() {
  return (
    <ThemedView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.png")} // Adjust the path based on your project structure
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <ThemedView style={styles.textContainer}>
          <ThemedText style={styles.titleText}>11:00 AM</ThemedText>
          <ThemedText style={styles.subtitleText}>Last updated</ThemedText>
        </ThemedView>
      </ImageBackground>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  imageBackground: {
    width: "100%",
    height: 180,
  },
  textContainer: {
    padding: 20,
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitleText: {
    fontSize: 12,
  },
});
