import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const WelcomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/splash-screen.png")}>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </ImageBackground>

      <View>
        <Text style={styles.title}>
          Get a better life and have healthy body
        </Text>
        <Text>Spend your fun time at home</Text>
        <Text>practicing anytime anywhere</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.title}>Get Started</Text>
        </Pressable>
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
