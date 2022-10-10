import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackScreenProps } from "../types";

const WelcomeScreen: React.FC<any> = ({
  navigation,
}: RootStackScreenProps<"HomePage">) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/splash-screen.png")}
      ></Image>

      <View style={styles.containerContent}>
        <Text style={[styles.title, { marginTop: 10 }]}>
          Get a better life and
        </Text>
        <Text style={[styles.title, { marginBottom: 5 }]}>
          have healthy body
        </Text>
        <Text style={styles.text}>Spend your fun time at home</Text>
        <Text style={[styles.text]}>practicing anytime anywhere</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
        <View style={styles.already}>
          <Text style={{ marginRight: 10 }}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("SignIn")}>
            <Text style={{ fontWeight: "bold", color: "#25AB75" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "65%",
  },
  containerContent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
  },
  button: {
    width: 250,
    padding: 10,
    backgroundColor: "#25AB75",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "5%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  already: {
    flexDirection: "row",
  },
});

export default WelcomeScreen;
