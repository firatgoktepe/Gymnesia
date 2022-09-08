import { StyleSheet, Pressable, ImageBackground, Platform } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { workouts } from "../db";
import SingleCard from "./SingleCard";

export interface WorkoutsDb {
  calories: number;
  imageLink: any;
  title: string;
  id: number;
  description: string;
  duration: number;
  task: number;
  gif: any;
  rep: number;
}

export default function SingleCards() {
  return (
    <View style={styles.cardContainer}>
      {workouts.map((workout: WorkoutsDb) => (
        <SingleCard key={workout.id} workout={workout} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 150,
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginBottom: 10,
  },
  profileTitle: {
    fontSize: 15,
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
