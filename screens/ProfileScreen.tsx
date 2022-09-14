import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable, Image, Alert } from "react-native";
import { loggingOut } from "../API/firebaseMethods";
import { Text, View } from "../components/Themed";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const ProfileScreen: React.FC<any> = ({ navigation }) => {
  // const auth = getAuth();
  // const user = auth.currentUser;
  // if (user !== null) {
  //   const email = user.email;

  //   const uid = user.uid;
  // }

  let currentUserUID = firebase.auth().currentUser?.uid;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

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
        setLastName(dataObj.lastName);
        setEmail(dataObj.email);
        console.log("DATA", dataObj);
      }
    }
    getUserInfo();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image
        style={styles.profileLogo}
        source={require("../assets/images/profile.jpeg")}
      />
      <Text style={[styles.title, { color: "#25AB75", fontStyle: "italic" }]}>
        {firstName && firstName}
        <Text> </Text>
        <Text style={[styles.title, { color: "#25AB75", fontStyle: "italic" }]}>
          {lastName && lastName}
        </Text>
      </Text>
      <Text style={[styles.title, { color: "#25AB75", fontStyle: "italic" }]}>
        {email && email}
      </Text>
      <Pressable onPress={() => loggingOut()}>
        <Text style={[styles.title, { color: "#F95045", fontSize: 25 }]}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  profileLogo: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ProfileScreen;
