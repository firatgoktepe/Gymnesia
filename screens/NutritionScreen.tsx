import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import { Text, View } from "../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootTabScreenProps } from "../types";
import { loggingOut } from "../API/firebaseMethods";
import Search from "../components/Search";
import TodaysCard from "../components/TodaysCard";
import FeaturedCard from "../components/FeaturedCard";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const image = {
  uri: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
};

const FirstRoute = () => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.image}
    imageStyle={{
      opacity: 0.5,
    }}
  >
    <View style={styles.indicator}>
      <Text style={styles.title}>0</Text>
      <Text style={styles.text}>kCal / day</Text>
    </View>
    <View
      style={{
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 30,
      }}
    >
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "orange",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Fat</Text>
          <Text>0 g</Text>
        </View>
      </View>
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "#25AB75",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Carbonhydrates</Text>
          <Text>0 g</Text>
        </View>
      </View>
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "blue",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Protein</Text>
          <Text>0 g</Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

const SecondRoute = () => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.image}
    imageStyle={{
      opacity: 0.5,
    }}
  >
    <View style={styles.indicator}>
      <Text style={styles.title}>0</Text>
      <Text style={styles.text}>kCal / week</Text>
    </View>
    <View
      style={{
        padding: 30,
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "orange",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Fat</Text>
          <Text>0 g</Text>
        </View>
      </View>
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "#25AB75",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Carbonhydrates</Text>
          <Text>0 g</Text>
        </View>
      </View>
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "blue",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Protein</Text>
          <Text>0 g</Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

const ThirdRoute = () => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.image}
    imageStyle={{
      opacity: 0.5,
    }}
  >
    <View style={styles.indicator}>
      <Text style={styles.title}>0</Text>
      <Text style={styles.text}>kCal / month</Text>
    </View>
    <View
      style={{
        padding: 30,
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "orange",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Fat</Text>
          <Text>0 g</Text>
        </View>
      </View>
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "#25AB75",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Carbonhydrates</Text>
          <Text>0 g</Text>
        </View>
      </View>
      <View style={styles.ingredient}>
        <View
          style={{
            width: 25,
            height: 25,
            borderRadius: 150,
            backgroundColor: "blue",
          }}
        ></View>
        <View style={{ marginLeft: 5 }}>
          <Text>Protein</Text>
          <Text>0 g</Text>
        </View>
      </View>
    </View>
  </ImageBackground>
);

const initialLayout = { width: Dimensions.get("window").width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const NutritionScreen: React.FC<
  any
> = ({}: RootTabScreenProps<"Nutrition">) => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Today" },
    { key: "second", title: "Last 7" },
    { key: "third", title: "Last 30" },
  ]);

  const renderTabBar: React.FC<any> = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "white" }}
      labelStyle={{
        backgroundColor: "#F95045",
        borderRadius: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        width: 100,
        justifyContent: "center",
        padding: 10,
      }}
      style={{
        backgroundColor: "#25AB75",
      }}
    />
  );

  return (
    <>
      <Search placeholder="Search Nutrition" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.container}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Nutritions")}
      >
        <Ionicons
          style={styles.iconText}
          name="ios-add-circle-outline"
          size={24}
          color="white"
        />
        <Text style={styles.buttonText}>Add meal</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 300,
  },
  indicator: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
    marginRight: "auto",
    marginBottom: 70,
    marginLeft: "auto",
    borderRadius: 150,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
  },
  ingredient: {
    flexDirection: "row",
  },
  button: {
    width: 350,
    padding: 5,
    backgroundColor: "#F95045",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 15,
    alignSelf: "center",
    margin: "5%",
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
  iconText: {
    padding: 10,
  },
});

export default NutritionScreen;