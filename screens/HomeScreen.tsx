import { StyleSheet } from "react-native";

import Header from "../components/Header";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Axios from "axios";
import Search from "../components/Search";
import TodaysCard from "../components/TodaysCard";

// Axios call test

// const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises",
//   headers: {
//     "X-RapidAPI-Key": "710565457fmshac65682c3fefbefp1e7d6ejsnfa6dd6e2a3e5",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

// Axios.request(options)
//   .then(function (response) {
//     console.log("Response", response.data);
//   })
//   .catch(function (error) {
//     console.error("Error", error);
//   });

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <TodaysCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
