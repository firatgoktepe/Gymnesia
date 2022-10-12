import { StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View } from "./Themed";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Header: React.FC<any> = ({ firstName, navigation }) => {
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
              Hello{" "}
              <MonoText testID="userName" style={styles.profileHeading}>
                {firstName}
              </MonoText>
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
              Have a nice day
            </MonoText>
          </View>
        </View>

        <View style={styles.notification}>
          <Pressable
            onPress={() => navigation.navigate("Notification")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Ionicons name="notifications-outline" size={30} color="black" />
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 5,
    paddingBottom: 5,
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
  },
  profileText: {
    fontSize: 14,
    lineHeight: 24,
  },
  notification: {
    justifyContent: "center",
  },
});

export default Header;
