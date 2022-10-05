import {
  StyleSheet,
  ImageBackground,
  Platform,
  View,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
//import { View } from "./Themed";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import Search from "./Search";
import { workouts } from "../db";

const title: string = workouts[0].title;
const calories: number = workouts[0].calories;
const duration: number = workouts[0].duration;

export default function WorkoutCard() {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../assets/images/workouts/bench_press.jpeg")}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.contentContainer}>
          <MonoText style={styles.profileTitle}>{title}</MonoText>
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
  contentContainer: {
    width: 320,
    top: 65,
    flexDirection: "column",
    backgroundColor: "#25AB75",
    height: 60,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileTitle: {
    fontSize: 20,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    fontWeight: Platform.OS === "android" ? "900" : "700",
    //marginTop: 90,
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
