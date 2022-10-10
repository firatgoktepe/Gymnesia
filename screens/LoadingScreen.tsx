import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { RootStackScreenProps } from "../types";

const LoadingScreen = ({ navigation }: RootStackScreenProps<"Loading">) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Root");
      } else {
        navigation.replace("HomePage");
      }
    });
  });

  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingScreen;
