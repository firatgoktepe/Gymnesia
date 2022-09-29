import React from "react";
import { StyleSheet, View } from "react-native";
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
    { slug: "calves", intensity: 2 },
    { slug: "neck", intensity: 2 },
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
      <Text style={styles.title}>Muscles you got pumped</Text>
      <Text>{currSlide}</Text>
      <Body
        // @ts-ignore
        data={data}
        scale={2}
      />
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
    marginBottom: 20,
    textAlign: "center",
  },
  calorie: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    width: 350,
    padding: 5,
    backgroundColor: "#F95045",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
});

export default ModalBodyPartsScreen;
