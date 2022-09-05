import { StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.profilePerson}>
          <Image
            style={styles.profileLogo}
            source={require("../assets/images/profile.jpeg")}
          />
          <View>
            <MonoText
              style={styles.profileHeading}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
            >
              Hello Fırat
              <MaterialCommunityIcons
                name="hand-wave"
                size={24}
                color="orange"
              />
            </MonoText>

            <MonoText
              style={styles.profileText}
              lightColor="rgba(0,0,0,0.8)"
              darkColor="rgba(255,255,255,0.8)"
            >
              Good Morning!
            </MonoText>
          </View>
        </View>

        <View style={styles.notification}>
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Ionicons name="notifications-outline" size={34} color="black" />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  profilePerson: {
    flexDirection: "row",
  },
  profileLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  profileHeading: {
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 24,
    textAlign: "center",
    color: `${Colors.light.text}`,
  },
  profileText: {
    fontSize: 14,
    lineHeight: 24,
    color: `${Colors.light.text}`,
  },
  notification: {
    justifyContent: "center",
  },
});
