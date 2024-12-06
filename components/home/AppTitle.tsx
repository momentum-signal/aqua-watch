import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import Svg from "react-native-svg";
// import Logo from "../../assets/images/app-icon.svg";

export default function AppTitle() {
  return (
    <ThemedView style={[styles.container]}>
      {/* <Logo width={120} height={40} />; */}

      <ThemedText style={[styles.text]}>Pure Track</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 10,
    // marginVertical: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
