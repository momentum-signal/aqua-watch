import React from "react";

import { ThemedView } from "@/components/ThemedView";
import CustomBarChart from "@/components/home/CustomBarChart";
import LastUpdatedTime from "@/components/home/LastUpdatedTime";
import AppHeader from "@/components/home/AppHeader";

export default function index() {
  const barData = [
    { value: 6.5, label: "22:35" },
    { value: 8.2, label: "22:40" },
    { value: 12.0, label: "22:30" },
    { value: 6.8, label: "22:45" },
    { value: 7.4, label: "22:50" },
    { value: 6.9, label: "22:55" },
    { value: 10.0, label: "23:00" },
    { value: 10.0, label: "23:00" },
  ];

  return (
    <ThemedView>
      <AppHeader />
      <LastUpdatedTime />
      <CustomBarChart data={barData} maxValue={12} noOfSections={3} />
    </ThemedView>
  );
}
