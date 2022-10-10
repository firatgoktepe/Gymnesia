// Example of React Native Timer and Stopwatch
// https://aboutreact.com/react-native-timer-stopwatch/

// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from "react-native";

//importing library to use Stopwatch and Timer
// @ts-ignore
import { Timer } from "react-native-stopwatch-timer";
import Colors from "../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppProps = {
  getCurrentIndex: () => void;
};

const TimerWatch = ({ getCurrentIndex }: AppProps) => {
  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);
  const [timerDuration, setTimerDuration] = useState<number>(5000);
  const [resetTimer, setResetTimer] = useState<boolean>(false);
  const [timeCounter, setTimeCounter] = useState<number>(0);
  const [totalTimeCounter, setTotalTimeCounter] = useState([]);

  console.log("Count", timeCounter);
  console.log("Cousadsdasdasdsdant", totalTimeCounter);

  let total = totalTimeCounter.reduce((a, b) => a + b, timeCounter);
  console.log("Total", total);

  // Set timeCount into Async Storage
  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(total);
        await AsyncStorage.setItem("@countNumberr", jsonValue);
        console.log("jsonn", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    storeData();
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Text style={styles.scoreText}>Scored Time</Text>
          <Timer
            // @ts-ignore
            totalDuration={timerDuration}
            msecs
            //Time Duration
            start={isTimerStart}
            //To start
            reset={resetTimer}
            //To reset
            options={options}
            //options for the styling
            getMsecs={(time: number) => {
              console.log(time);
              if (!isTimerStart) {
                // if (time === 0) {
                //   setTimeCounter(() => timerDuration / 1000);
                // }

                time < timerDuration &&
                  setTimeCounter(() =>
                    Math.ceil((timerDuration - time) / 1000)
                  );
              }
            }}
            // get instant time
            handleFinish={() => {
              Alert.alert(
                "Time is over. Slide left to right for the next exercise"
              );
              //setTimeCounter(() => timeCounter + 5);
              setIsTimerStart(false);
              setResetTimer(true);
              // @ts-ignore
              setTotalTimeCounter((prev) => [...prev, timeCounter]);
              getCurrentIndex();
              const storeCurrentSlide = async () => {
                try {
                  const jsonValue = JSON.stringify(getCurrentIndex());
                  await AsyncStorage.setItem("@currentSlide", jsonValue);
                  console.log("json123123123123n", jsonValue);
                } catch (e) {
                  console.log(e);
                }
              };
              storeCurrentSlide();
            }}
          />
          <Text style={styles.repsText}>4x15 reps</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight
              onPress={() => {
                setIsTimerStart(!isTimerStart);
                setResetTimer(false);
              }}
            >
              <Text style={styles.buttonStart}>
                {!isTimerStart ? "START" : "STOP"}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setIsTimerStart(false);
                setResetTimer(true);
              }}
            >
              <Text style={styles.buttonReset}>RESET</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimerWatch;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionStyle: {
    flex: 1,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStart: {
    fontSize: 20,
    margin: 10,
    color: `${Colors.light.tint}`,
  },
  buttonReset: {
    fontSize: 20,
    margin: 10,
    color: `${Colors.light.notification}`,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "200",
  },
  repsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const options = {
  container: {
    backgroundColor: "#FFFFFF",
    padding: 5,
    width: 300,
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "#25AB75",
    fontWeight: "bold",
  },
};
