import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import Body from "../components/BodyPart";

const ModalBodyPartsScreen = () => {
  const route = useRoute();
  // @ts-ignore
  const { currSlide } = route.params;

  const dataBenchPress = [
    { slug: "chest", intensity: 1 },
    { slug: "triceps", intensity: 2 },
  ];
  const dataPushUp = [
    { slug: "chest", intensity: 1 },
    { slug: "back-deltoids", intensity: 2 },
    { slug: "abs", intensity: 1 },
  ];
  const dataResistance = [
    { slug: "hamstring", intensity: 2 },
    { slug: "gluteal", intensity: 1 },
  ];
  const dataFullBody = [
    { slug: "upper-back", intensity: 1 },
    { slug: "lower-back", intensity: 2 },
    { slug: "back-deltoids", intensity: 2 },
    { slug: "forearm", intensity: 2 },
    { slug: "abductors", intensity: 1 },
    { slug: "quadriceps", intensity: 1 },
    { slug: "calves", intensity: 1 },
    { slug: "neck", intensity: 2 },
    { slug: "gluteal", intensity: 1 },
  ];

  const data =
    currSlide == 0
      ? dataBenchPress
      : currSlide == 1
      ? dataPushUp
      : currSlide == 2
      ? dataResistance
      : currSlide == 3
      ? dataFullBody
      : "";

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "black",
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Your body
      </Text>
      <Body
        // @ts-ignore
        data={data}
        scale={2}
        colors={["#f21607", "#f28179"]}
      />

      <View style={styles.calorie}>
        <Text
          style={{
            color: "black",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Result
        </Text>
        <Text style={[styles.title, { color: "black", marginBottom: 10 }]}>
          Your last exercise:{" "}
          <Text style={{ color: "#25AB75" }}>
            {currSlide == 0
              ? "Bench Press"
              : currSlide == 1
              ? "Push Up"
              : currSlide == 2
              ? "Resistance Band"
              : currSlide == 3
              ? "Full Body"
              : "No exercise"}
          </Text>
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: "stretch",
            marginBottom: 5,
          }}
        />
        <Text style={[styles.title, { color: "black", marginBottom: 10 }]}>
          Muscles group you pumped:{" "}
          <Text style={{ color: "#F95045" }}>
            {currSlide == 0
              ? "Chest and Triceps"
              : currSlide == 1
              ? "Chest, Abs and Back-deltoids"
              : currSlide == 2
              ? "Hamstring and Gluteal"
              : currSlide == 3
              ? "Upper-back, Lower-back, Back-deltoids, Forearm, Calves, Abductors, Gluteal, Quadriceps and Neck"
              : "No muscles pumped yet"}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  calorie: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModalBodyPartsScreen;
