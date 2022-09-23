import { StyleSheet, Image, Dimensions, Platform } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { workouts } from "../db";
import { WorkoutsDb } from "../components/SingleCards";
import TimerWatch from "../components/TimerWatch";

export const { width, height } = Dimensions.get("window");

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        showPagination
        paginationActiveColor={Colors.light.notification}
        paginationStyle={{ top: 20 }}
      >
        {workouts.map((workout: WorkoutsDb) => (
          <View key={workout.id} style={styles.parent}>
            <View style={styles.content}>
              <Image style={styles.image} source={workout.gif} />
              <Text style={styles.text}>{workout.title}</Text>
            </View>
          </View>
        ))}
      </SwiperFlatList>
      <TimerWatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",

    backgroundColor: "white",
  },
  parent: {
    height: height * 0.5,
    width: width * 1,
    justifyContent: "space-around",
  },
  content: {
    flex: 4,
  },
  image: {
    flex: 1,
    width: width * 1,
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 25,
    lineHeight: 24,
    color: `${Colors.light.text}`,
    fontWeight: Platform.OS === "android" ? "900" : "700",
    textAlign: "center",
  },
});
