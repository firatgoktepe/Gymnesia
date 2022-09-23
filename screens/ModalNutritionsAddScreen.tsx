import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
  Keyboard,
} from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import { View, Text } from "../components/Themed";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Search from "../components/Search";
import { workouts } from "../db";
import { HeadingText } from "../components/Headings";
import { WorkoutsDb } from "../components/SingleCards";
import { useRoute } from "@react-navigation/native";
import { nutritions } from "../nutritionsDb";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ModalNutritionsAddScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    id,
    title,
    image,
    nutrientsFat,
    nutrientsFatAmount,
    nutrientsFatUnit,
    nutrientsProtein,
    nutrientsProteinAmount,
    nutrientsProteinUnit,
    nutrientsCalories,
    nutrientsCaloriesAmount,
    nutrientsCaloriesUnit,
    nutrientsCarbonhydrates,
    nutrientsCarbonhydratesAmount,
    nutrientsCarbonhydratesUnit,
  }: any = route.params;
  const [number, setNumber] = React.useState("");

  function handleHelpPress() {
    WebBrowser.openBrowserAsync(
      "https://www.momsteam.com/nutrition/sports-nutrition-basics/nutritional-needs-guidelines/carbohydrate-and-calorie-content-of-foods"
    );
  }

  // My custom "type only number" function
  const onChanged = (text: string) => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        Alert.alert("Please enter numbers only");
      }
    }
    setNumber(newText);
  };

  const saveCalorie = async () => {
    const user = {
      number: number,
      nutrientsFatAmount: nutrientsFatAmount,
      nutrientsCarbonhydratesAmount: nutrientsCarbonhydratesAmount,
      nutrientsProteinAmount: nutrientsProteinAmount,
    };
    Alert.alert(
      "Calorie added",
      "Your calorie has been added to your daily calorie intake"
    ),
      {
        text: "OK",
      };

    try {
      // @ts-ignore
      await AsyncStorage.setItem("@calNumber", JSON.stringify(user));
      console.log("USER", user);
    } catch (err) {
      console.log(err);
    }
  };

  // Set number into Async Storage
  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem("@calorieNumberr", number);
        console.log("jsosdsdsdsdn", typeof number);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();
  }, [number]);

  // Multiple user added in one array

  const onPress = () => {
    setNumber("");
    number && saveCalorie();
    Keyboard.dismiss();
  };

  return (
    <View style={styles.cardContainer}>
      <View key={id} style={styles.container}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 150 }}
          source={{
            uri: image,
          }}
        />
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.values}>
            <Text>
              {nutrientsFat + ":"} {nutrientsFatAmount} {nutrientsFatUnit + " "}
            </Text>
            <Text>
              {nutrientsProtein + ":"} {nutrientsProteinAmount}{" "}
              {nutrientsProteinUnit}
            </Text>
            <Text>
              {nutrientsCarbonhydrates + ":"} {nutrientsCarbonhydratesAmount}{" "}
              {nutrientsCarbonhydratesUnit}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              {nutrientsCalories + ":"} {nutrientsCaloriesAmount}{" "}
              {nutrientsCaloriesUnit}
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.title, { marginLeft: 10, marginTop: 10 }]}>
        Enter the amount you ate ( grams )
      </Text>
      <TextInput
        value={number}
        onChangeText={(text) => onChanged(text)}
        style={styles.input}
        placeholder="100"
        keyboardType="numeric"
        maxLength={4}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={handleHelpPress}>
          <MonoText style={styles.buttonText} lightColor={Colors.light.tint}>
            More Details
          </MonoText>
        </TouchableOpacity>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          onPress();
          number &&
            navigation.navigate("Nutrition", {
              // calorie: number,
              // fatAmount: nutrientsFatAmount,
              // carbonhydratesAmount: nutrientsCarbonhydratesAmount,
              // proteinAmount: nutrientsProteinAmount,
            });
        }}
      >
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: { flex: 1 },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
    marginTop: 10,
    padding: 10,
  },
  card: { justifyContent: "center" },
  values: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 200,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold",
  },
  button: {
    width: 350,
    padding: 5,
    backgroundColor: "#25AB75",
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
