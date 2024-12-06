import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

type BarData = {
  value: number;
  label: string;
  frontColor?: string;
  labelColor?: string;
};

interface BarChartProps {
  data: BarData[];
  noOfSections: number;
  maxValue: number;
  xAxisThickness?: number;
  yAxisThickness?: number;
  xAxisColor?: string;
  labelTextStyle?: any;
}

export default function CustomBarChart({
  data,
  noOfSections,
  maxValue,
  xAxisThickness = 0,
  yAxisThickness = 1,
  xAxisColor = "#2389DA",
  labelTextStyle = { fontSize: 12 },
}: BarChartProps) {
  // Map through the data and add `frontColor` based on the index
  const updatedBarData = data.map((item: BarData, index: number) => ({
    ...item,
    frontColor: index % 2 === 0 ? "#AEE7FF" : "#2389DA",
  }));
  const labelTextColor = useThemeColor(
    { light: "black", dark: "white" },
    "text"
  );

  const { width } = Dimensions.get("window");

  return (
    <ThemedView style={styles.chartContainer}>
      <ThemedView style={styles.textContainer}>
        <ThemedText style={{ fontSize: 18, fontWeight: "700" }}>
          Temperature Level
        </ThemedText>
        <ThemedText style={{ fontSize: 14, fontWeight: "400" }}>
          Today
        </ThemedText>
      </ThemedView>
      <BarChart
        data={updatedBarData}
        width={width - 110}
        xAxisLength={width - 95}
        noOfSections={noOfSections}
        stepValue={2}
        maxValue={maxValue}
        barBorderRadius={5}
        yAxisThickness={xAxisThickness}
        xAxisThickness={yAxisThickness}
        showXAxisIndices={false}
        xAxisType="dashed"
        // sectionColors={["red", "blue", "green", "yellow"]}
        xAxisColor={xAxisColor}
        xAxisLabelTextStyle={{
          ...labelTextStyle,
          color: labelTextColor,
        }}
        yAxisTextStyle={{ ...labelTextStyle, color: labelTextColor }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "lightgrey",
  },
  textContainer: {
    padding: 10,
    marginBottom: 10,
  },
});
