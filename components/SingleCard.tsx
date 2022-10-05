import { StyleSheet, Pressable, ImageBackground, Platform } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { workouts } from "../db";
import { useNavigation } from "@react-navigation/native";
import { WorkoutsDb } from "./SingleCards";

type WorkoutProps = {
  workout: WorkoutsDb;
};

const SingleCard: React.FC<WorkoutProps> = ({ workout }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Workout", {
          id: workout.id,
          title: workout.title,
          task: workout.task,
          calories: workout.calories,
          duration: workout.duration,
          description: workout.description,
          imageLink: workout.imageLink,
        })
      }
    >
      <ImageBackground
        source={workout.imageLink}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <MonoText style={styles.profileTitle}>
          {workout.title}
          <MonoText
            style={styles.profileText}
          >{`  ${workout.task} Task`}</MonoText>
        </MonoText>
      </ImageBackground>
    </Pressable>
  );
};

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
    width: "100%",
    top: 20,
    backgroundColor: "#25AB75",
    fontSize: 15,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    fontWeight: Platform.OS === "android" ? "900" : "700",
    marginTop: 90,
    paddingLeft: 5,
  },
  profileText: {
    fontSize: 12,
    lineHeight: 24,
    color: `${Colors.dark.text}`,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default SingleCard;
