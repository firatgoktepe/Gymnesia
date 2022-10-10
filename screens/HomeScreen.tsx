import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Pressable, Alert } from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import Header from "../components/Header";
import { Text, View } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../types";
import Axios from "axios";
import { loggingOut } from "../API/firebaseMethods";
import Search from "../components/Search";
import TodaysCard from "../components/TodaysCard";
import FeaturedCard from "../components/FeaturedCard";

// Axios call test

// const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises",
//   headers: {
//     "X-RapidAPI-Key": "Some key",
//     "X-RapidAPI-Host": "example.com",
//   },
// };

// Axios.request(options)
//   .then(function (response) {
//     console.log("Response", response.data);
//   })
//   .catch(function (error) {
//     console.error("Error", error);
//   });

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  let currentUserUID = firebase.auth().currentUser?.uid;
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    async function getUserInfo() {
      let doc = await firebase
        .firestore()
        .collection("users")
        .doc(currentUserUID)
        .get();

      if (!doc.exists && !currentUserUID) {
        Alert.alert("No user data found!");
      } else {
        let dataObj: any = doc.data();
        setFirstName(dataObj.firstName);
      }
    }
    getUserInfo();
  });

  const handlePress = () => {
    loggingOut();
    navigation.replace("HomePage");
  };

  return (
    <ScrollView style={styles.container}>
      <Header firstName={firstName} navigation={navigation} />
      <Search placeholder="Search Workout" />
      <Pressable onPress={() => navigation.navigate("Details")}>
        <TodaysCard />
      </Pressable>
      <FeaturedCard />
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
