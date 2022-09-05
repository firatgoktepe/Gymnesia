import { StyleSheet, Pressable, ImageBackground } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Search from "./Search";
import { workouts } from "../db";

console.log("Workouts link", workouts);

const title: string = workouts[0].title;
const calories: number = workouts[0].calories;

export default function WorkoutCard() {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/workouts/bench_press.jpeg")}
        style={styles.image}
      >
        <MonoText style={styles.profileText}>{title}</MonoText>
        <MonoText style={styles.profileText}>{`${calories} kCal`}</MonoText>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 200,
    height: 200,
  },
  profileText: {
    fontSize: 14,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
  },
});
