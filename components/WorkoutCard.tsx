import { StyleSheet, Pressable, ImageBackground, Platform } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Search from "./Search";
import { workouts } from "../db";

console.log("Workouts link", workouts);

const title: string = workouts[0].title;
const calories: number = workouts[0].calories;
const duration: number = workouts[0].duration;
const task: number = workouts[0].task;

export default function WorkoutCard() {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../assets/images/workouts/bench_press.jpeg")}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {},
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 320,
    height: 180,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  profileTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    fontWeight: Platform.OS === "android" ? "900" : "700",
    marginTop: 90,
    marginLeft: 10,
  },
  profileText: {
    fontSize: 12,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
