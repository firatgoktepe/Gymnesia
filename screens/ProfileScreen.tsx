import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Pressable,
  Image,
  Alert,
  ImageBackground,
  Platform,
} from "react-native";
import { loggingOut } from "../API/firebaseMethods";
import { Text, View } from "../components/Themed";
import { getAuth } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytes, getStorage } from "firebase/storage";

const ProfileScreen: React.FC<any> = ({ navigation }) => {
  let currentUserUID = firebase.auth().currentUser?.uid;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("Result", result);

    if (!result.cancelled) {
      setImage(result.uri);
      const uri = result.uri;
      let uploadUri = Platform.OS === "ios" ? uri.replace("file://", "") : uri;
      // firebase
      //   .storage()
      //   // @ts-ignore
      //   .ref(currentUserUID)
      //   // @ts-ignore
      //   .putFile(uploadUri)
      //   .then((snapshot: any) => {
      //     console.log(`${uploadUri} has been successfully uploaded.`);
      //   })
      //   .catch((error: any) => {
      //     Alert.alert(error);
      //   });

      // const storage = getStorage();
      // //@ts-ignore
      // const storageRef = ref(currentUserUID);

      // console.log("My ref", storageRef);
      const update = {
        displayName: "Alias",
        photoURL: `${uploadUri}`,
      };

      firebase.auth().currentUser?.updateProfile(update);

      console.log("hey", firebase.auth().currentUser);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Pressable onPress={pickImage}>
        {image ? (
          <ImageBackground style={styles.profileLogo} source={{ uri: image }}>
            <AntDesign
              style={{ marginBottom: 35 }}
              name="clouduploado"
              size={44}
              color="white"
            />
          </ImageBackground>
        ) : (
          <ImageBackground
            style={styles.profileLogo}
            source={require("../assets/images/profile.jpeg")}
          >
            <AntDesign
              style={{ marginBottom: 35 }}
              name="clouduploado"
              size={44}
              color="white"
            />
          </ImageBackground>
        )}
      </Pressable>
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default ProfileScreen;
