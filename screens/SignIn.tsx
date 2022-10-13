import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { signIn } from "../API/firebaseMethods";
import { RootStackScreenProps } from "../types";

const SignIn: React.FC<any> = ({
  navigation,
}: RootStackScreenProps<"SignIn">) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const handlePress = () => {
    if (!email) {
      Alert.alert("Email field is required.");
    }

    if (!password) {
      Alert.alert("Password field is required.");
    }

    signIn(email, password);
    setEmail("");
    setPassword("");
    toggleLoading();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in to your account:</Text>

      <TextInput
        style={styles.formInput}
        testID={"inputEmail"} // added testID
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email.trim())}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        testID={"inputPassword"} // added testID
        placeholder="Enter your password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />

      <Pressable
        testID={"submitButton"}
        style={styles.button}
        onPress={handlePress}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {isLoading && <ActivityIndicator size="small" color="white" />}
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 200,
    padding: 5,
    backgroundColor: "#F95045",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "2%",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#25AB75",
    alignItems: "center",
    justifyContent: "center",
  },
  formInput: {
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#a4eddf",
    padding: 10,
    margin: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color: "#2E6194",
  },
});

export default SignIn;
