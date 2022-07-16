import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Timer from "./src/Timer";
import React from "react";

export default function App() {
  const [time, setTime] = React.useState(0);
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);
  const [isInInputMode, setIsInInputMode] = React.useState(true);
  return (
    <View style={styles.container}>
      {!isInInputMode ? (
        <>
          <Timer time={+time} isTimerRunning={isTimerRunning} />
          <Button title="Stop" onPress={() => setIsTimerRunning(false)} />
          <Button title="Continue" onPress={() => setIsTimerRunning(true)} />
          <Button
            title="Reset"
            onPress={() => {
              setIsInInputMode(true);
            }}
          />
        </>
      ) : (
        <View>
          <Text style={styles.infoText}>
            {"Enter The Time To Count (seconds)"}
          </Text>
          <TextInput
            style={styles.TextInput}
            value={String(time)}
            onChangeText={(e) => setTime(e)}
          />
          <Button
            onPress={() => {
              setIsInInputMode((prev) => !prev);
            }}
            title={"Start Timer"}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: "auto",
    marginVertical: 10,
    width: 250,
  },
  infoText: {
    fontWeight: "bold",
  },
});
