import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "./src/AddButton";
import Input from "./src/Input";
import ScrollArea from "./src/ScrollArea";
import React from "react";

export default function App() {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");

  const addTask = () => {
    input && setTasks([...tasks, input]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Input onTextChange={setInput} value={input} />
        <AddButton style={styles.marginLeft} onPress={addTask} />
      </View>
      <View style={styles.scrollArea}>
        <ScrollArea data={tasks} remove={removeTask} />
      </View>
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
  input: {
    width: "80%",
    flexDirection: "row",
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  scrollArea: {
    flex: 8,
  },

  marginLeft: {
    marginLeft: 20,
  },
});
