import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { registration } from "../API/firebaseMethods";
import { RootStackScreenProps } from "../types";

const SignUp: React.FC<any> = ({
  navigation,
}: RootStackScreenProps<"SignUp">) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const emptyState = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const handlePress = () => {
    if (!firstName) {
      Alert.alert("First name is required");
    } else if (!email) {
      Alert.alert("Email field is required.");
    } else if (!password) {
      Alert.alert("Password field is required.");
    } else if (!confirmPassword) {
      setPassword("");
      Alert.alert("Confirm password field is required.");
    } else if (password !== confirmPassword) {
      Alert.alert("Password does not match!");
    } else {
      registration(email, password, lastName, firstName);
      toggleLoading();
      emptyState();
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account </Text>

        <ScrollView>
          <TextInput
            testID={"inputName"} // added testID
            style={styles.textInput}
            placeholder="First name*"
            value={firstName}
            onChangeText={(name) => setFirstName(name.trim())}
          />
          <TextInput
            testID={"inputSurName"} // added testID
            style={styles.textInput}
            placeholder="Last name*"
            value={lastName}
            onChangeText={(name) => setLastName(name.trim())}
          />

          <TextInput
            testID={"inputEmail"} // added testID
            style={styles.textInput}
            placeholder="Enter your email*"
            value={email}
            onChangeText={(email) => setEmail(email.trim())}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            testID={"inputPassword"} // added testID
            style={styles.textInput}
            placeholder="Enter your password*"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
          />
          <TextInput
            testID={"inputConfirmPassword"} // added testID
            style={styles.textInput}
            placeholder="Retype your password to confirm*"
            value={confirmPassword}
            onChangeText={(password2) => setConfirmPassword(password2)}
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={handlePress}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {isLoading && <ActivityIndicator size="small" color="white" />}
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </Pressable>

          <Text style={styles.inlineText}>Already have an account?</Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#25AB75",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: "#F95045",
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
  inlineText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "navy",
    textAlign: "center",
    marginTop: "5%",
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    margin: "5%",
    marginTop: "15%",
    fontWeight: "bold",
    color: "#2E6194",
  },
  textInput: {
    width: 300,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#a4eddf",
    padding: 10,
    margin: 5,
  },
});

export default SignUp;
