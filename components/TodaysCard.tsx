import { StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Search from "./Search";
import { HeadingText } from "../components/Headings";
import WorkoutCard from "./WorkoutCard";

export default function TodaysCard() {
  return (
    <View style={styles.profileContainer}>
      <HeadingText style={styles.headingText}>Todays Session</HeadingText>
      <WorkoutCard />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
  },
  headingText: {
    marginBottom: 20,
  },
});
