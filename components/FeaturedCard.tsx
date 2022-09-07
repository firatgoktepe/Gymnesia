import { StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import Search from "./Search";
import { HeadingText } from "../components/Headings";
import SingleCards from "./SingleCards";
import { workouts } from "../db";
import { RootStackScreenProps } from "../types";

export default function FeaturedCard() {
  return (
    <View style={styles.profileContainer}>
      <HeadingText style={styles.headingText}>Featured Workouts</HeadingText>
      <SingleCards />
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
