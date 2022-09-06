import { StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { AntDesign } from "@expo/vector-icons";

export default function Search() {
  return (
    <View style={styles.searchSection}>
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        size={24}
        color="#A8A8A8"
      />
      <TextInput style={styles.input} placeholder="Search workouts" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
