import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ImageBackground,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import { Text, View } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../types";
import { loggingOut } from "../API/firebaseMethods";
import Search from "../components/Search";
import TodaysCard from "../components/TodaysCard";
import FeaturedCard from "../components/FeaturedCard";

const image = {
  uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
};

export default function NutritionScreen({
  navigation,
}: RootTabScreenProps<"Nutrition">) {
  return (
    <ScrollView style={styles.container}>
      <Search placeholder="Search Nutrition" />
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          opacity: 0.5,
        }}
      >
        <View style={styles.indicator}>
          <Text style={styles.title}>0</Text>
          <Text style={styles.text}>kCal / day</Text>
        </View>
        <View
          style={{
            padding: 30,
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <View style={styles.ingredient}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 150,
                backgroundColor: "orange",
              }}
            ></View>
            <View style={{ marginLeft: 5 }}>
              <Text>Fat</Text>
              <Text>0 / 0 g</Text>
            </View>
          </View>
          <View style={styles.ingredient}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 150,
                backgroundColor: "#25AB75",
              }}
            ></View>
            <View style={{ marginLeft: 5 }}>
              <Text>Carbonhydrates</Text>
              <Text>0 / 0 g</Text>
            </View>
          </View>
          <View style={styles.ingredient}>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 150,
                backgroundColor: "blue",
              }}
            ></View>
            <View style={{ marginLeft: 5 }}>
              <Text>Protein</Text>
              <Text>0 / 0 g</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <Pressable style={styles.button}>
        <Ionicons
          style={styles.iconText}
          name="ios-add-circle-outline"
          size={24}
          color="white"
        />
        <Text style={styles.buttonText}>Add meal</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 500,
  },
  indicator: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginRight: "auto",
    marginBottom: 70,
    marginLeft: "auto",
    borderRadius: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
  },
  ingredient: {
    flexDirection: "row",
  },
  button: {
    width: 350,
    padding: 5,
    backgroundColor: "#F95045",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  iconText: {
    padding: 10,
  },
});
