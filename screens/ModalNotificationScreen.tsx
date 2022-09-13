import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import { View, Text } from "../components/Themed";
import Search from "../components/Search";

import { HeadingText } from "../components/Headings";

const image = {
  uri: "https://cdn.dribbble.com/users/1373705/screenshots/6457914/no_notification_yiran.png",
};

export default function ModalNotificationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>No Notification yet!</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
