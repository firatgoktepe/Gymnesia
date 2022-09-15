import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ImageBackground,
  Platform,
} from "react-native";

import Header from "../components/Header";
import { Text, View } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../types";
import { loggingOut } from "../API/firebaseMethods";
import Search from "../components/Search";
import TodaysCard from "../components/TodaysCard";
import FeaturedCard from "../components/FeaturedCard";

export default function NutritionScreen({
  navigation,
}: RootTabScreenProps<"Nutrition">) {
  return (
    <ScrollView style={styles.container}>
      <Search placeholder="Search Nutrition" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
