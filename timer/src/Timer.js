import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const Timer = ({ time, isTimerRunning }) => {
  const [currentTime, setCurrentTime] = React.useState(time);

  const ShouldTimerContinue = () => {
    return currentTime > 0 && isTimerRunning;
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      ShouldTimerContinue() && setCurrentTime((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [currentTime, isTimerRunning]);
  return (
    <View style={styles.containe}>
      <Text style={styles.time}>
        {currentTime > 0 ? currentTime : "Time's Up!"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Timer;
