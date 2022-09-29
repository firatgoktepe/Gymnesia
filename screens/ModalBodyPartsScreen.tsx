import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import Body from "react-native-body-highlighter";

const ModalBodyPartsScreen = () => {
  const route = useRoute();
  // @ts-ignore
  const { currSlide } = route.params;
  const data = [
    { slug: "chest", intensity: 1 },
    { slug: "abs", intensity: 2 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ModalBodyPartsScreen</Text>
      <Text>{currSlide}</Text>
      <Body
        //@ts-ignore}
        data={data}
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
