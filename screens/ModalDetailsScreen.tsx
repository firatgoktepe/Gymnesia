import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import { Text } from "../components/Themed";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Search from "../components/Search";
import { workouts } from "../db";
import { HeadingText } from "../components/Headings";

const title: string = workouts[0].title;
const calories: number = workouts[0].calories;
const duration: number = workouts[0].duration;
const task: number = workouts[0].task;
const description: string = workouts[0].description;

export default function WorkoutCard() {
  return (
    <ScrollView style={styles.cardContainer}>
      <ImageBackground
        source={require("../assets/images/workouts/bench_press.jpeg")}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.contentContainer}>
          <MonoText style={styles.profileTitle}>{title}</MonoText>
          <MonoText style={styles.profileText}>{`${task} Task`}</MonoText>
          <MonoText style={styles.profileText}>
            <EvilIcons name="heart" size={12} color={`${Colors.dark.text}`} />
            {` ${calories} kCal   `}
            <MonoText style={styles.profileText}>
              <Ionicons
                name="time-outline"
                size={12}
                color={`${Colors.dark.text}`}
              />
              {` ${duration} Min`}
            </MonoText>
          </MonoText>
        </View>
      </ImageBackground>
      <View style={styles.descriptionContainer}>
        <HeadingText style={styles.headingText}>{title}</HeadingText>
        <Text style={styles.text}>{description}</Text>
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {},
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  contentContainer: {
    top: 125,
    height: 100,
    backgroundColor: "#25AB75",
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    fontWeight: Platform.OS === "android" ? "900" : "700",

    marginLeft: 10,
  },
  descriptionContainer: {
    marginLeft: 5,
  },
  headingText: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  profileText: {
    fontSize: 12,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    marginLeft: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: "bold",
    margin: 20,
  },
});
