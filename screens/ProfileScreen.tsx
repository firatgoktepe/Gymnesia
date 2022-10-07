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
import storage from "@react-native-firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { ref, uploadBytes, getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen: React.FC<any> = () => {
  let currentUserUID = firebase.auth().currentUser?.uid;
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [image, setImage] = useState(null);
  const [calNumber, setCalNumber] = useState<number>(0); // calories
  const [countNum, setCountNum] = useState<number>(0); // count
  const [number, setNumber] = useState([]);
  const [currSlide, setCurrSlide] = useState<number>(0); // number
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation
      // @ts-ignore
      .addListener("tabPress", (e: any) => {
        const getData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem("@calNumber");
            jsonValue != null ? JSON.parse(jsonValue) : null;
            //@ts-ignore
            const parsedValues = JSON.parse(jsonValue);
            setCalNumber(Number(parsedValues.number));
          } catch (e) {
            console.log(e);
          }
        };

        const getCountData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem("@countNumberr");
            let time = jsonValue != null ? jsonValue : null;
            console.log("timeee", time);
            //@ts-ignore
            setCountNum(jsonValue);
          } catch (e) {
            console.log(e);
          }
        };
        const getNumberData = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem("@calorieNumberr");
            console.log("wwwwwww", jsonValue);
            let num = jsonValue != null ? Number(jsonValue) : null;
            //@ts-ignore
            setNumber((prev) => [...prev, num]);
          } catch (e) {
            console.log(e);
          }
        };

        const getcurrentSlide = async () => {
          try {
            const jsonValue = await AsyncStorage.getItem("@currentSlide");
            console.log("slideNow", jsonValue);
            //@ts-ignore
            setCurrSlide(jsonValue);
          } catch (e) {
            console.log(e);
          }
        };

        getData();
        getCountData();
        getNumberData();
        getcurrentSlide();
      });

    return unsubscribe;
  });

  console.log("TimeCount beybe", countNum);

  console.log(
    "Numbi numbi",
    number.reduce((a, b) => a + b, 0),
    [...new Set(number)]
  );

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

  // useEffect(() => {
  //   const getNumberData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem("@calorieNumberr");
  //       let num = jsonValue != null ? Number(jsonValue) : null;
  //       //@ts-ignore
  //       setNumber((prev) => [...prev, num]);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   getNumberData();
  // });
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const jsonValue = await AsyncStorage.getItem("@calNumber");
  //       jsonValue != null ? JSON.parse(jsonValue) : null;
  //       //@ts-ignore
  //       const parsedValues = JSON.parse(jsonValue);
  //       setCalNumber(Number(parsedValues.number));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   getData();
  // }, []);

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
      // storage()
      //   .ref(currentUserUID)
      //   .putFile(uploadUri)
      //   .then((snapshot: any) => {
      //     console.log(`${uploadUri} has been successfully uploaded.`);
      //   })
      //   .catch((error: any) => {
      //     Alert.alert(error);
      //   });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={pickImage}>
        {image ? (
          <ImageBackground
            imageStyle={{ borderRadius: 150 }}
            style={styles.profileLogo}
            source={{ uri: image }}
          >
            {/* <AntDesign
              style={{ marginBottom: 35 }}
              name="clouduploado"
              size={44}
              color="white"
            /> */}
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
      <View>
        <Text
          style={[
            styles.title,
            { color: "#25AB75", fontStyle: "italic", marginBottom: 0 },
          ]}
        >
          {firstName && firstName}
          <Text> </Text>
          <Text
            style={[styles.title, { color: "#25AB75", fontStyle: "italic" }]}
          >
            {lastName && lastName}
          </Text>
        </Text>
        <Text style={[styles.title, { color: "#25AB75", fontStyle: "italic" }]}>
          {email && email}
        </Text>
      </View>

      <View style={styles.calorie}>
        <Text style={[styles.title, { color: "black", marginBottom: 10 }]}>
          Total Calorie intake:{" "}
          <Text style={{ color: "#25AB75" }}>
            {[...new Set(number)].reduce((a, b) => a + b, 0) || 0} kCal
          </Text>
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: "stretch",
            marginBottom: 5,
          }}
        />
        <Text style={[styles.title, { color: "black", marginBottom: 10 }]}>
          Total Workout time:{" "}
          <Text style={{ color: "#25AB75" }}>
            {(countNum < 60
              ? countNum + " seconds"
              : Math.floor(countNum / 60) + " minutes") || 0}{" "}
          </Text>
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: "stretch",
            marginBottom: 5,
          }}
        />
        <Text style={[styles.title, { color: "black", marginBottom: 10 }]}>
          Total Calorie consumed:{" "}
          <Text style={{ color: "#25AB75" }}>{countNum / 10 || "-"} kCal</Text>
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: "stretch",
            marginBottom: 5,
          }}
        />
        <Text style={[styles.title, { color: "black", marginBottom: 10 }]}>
          Difference:{" "}
          <Text
            style={
              [...new Set(number)].reduce((a, b) => a + b, 0) - countNum / 10 <
              0
                ? { color: "#25AB75" }
                : { color: "#F95045" }
            }
          >
            {Math.abs(
              [...new Set(number)].reduce((a, b) => a + b, 0) - countNum / 10
            ) || "-"}{" "}
            kCal
          </Text>
        </Text>
        {Platform.OS === "ios" ? (
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("BodyParts", { currSlide: currSlide })
            }
          >
            <Text style={styles.buttonText}>See your progress</Text>
          </Pressable>
        ) : null}
      </View>
      <Pressable onPress={() => loggingOut()}>
        <Text
          style={{
            color: "#F95045",
            fontSize: 18,
            marginBottom: 30,
            fontStyle: "italic",
          }}
        >
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
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  profileLogo: {
    width: 200,
    height: 200,
    borderRadius: 150,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  calorie: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    width: 350,
    padding: 5,
    backgroundColor: "#F95045",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
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
});

export default ProfileScreen;
