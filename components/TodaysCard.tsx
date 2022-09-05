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
      <HeadingText>Todays Session</HeadingText>
      <WorkoutCard />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
  },
  profilePerson: {
    flexDirection: "row",
  },
  profileLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  profileHeading: {
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 24,
    textAlign: "center",
  },
  profileText: {
    fontSize: 14,
    lineHeight: 24,
  },
  notification: {
    justifyContent: "center",
  },
});
