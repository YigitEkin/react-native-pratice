import React from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";

const Grid = ({ gamePad, onPress }) => {
  return (
    <View style={styles.row} on>
      {gamePad.map((value, index) => {
        const text = value === 100 ? "" : value === 1 ? "X" : "O";
        return (
          <View style={styles.cell} key={index}>
            <Pressable style={styles.btn} onPress={() => onPress(index)}>
              <Text style={styles.text}>{text}</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: 270,
    height: 270,
  },
  cell: {
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#444",
    width: 90,
    height: "33%",
    flexShrink: 1,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    color: "#fff",
  },
  text: {
    fontSize: 30,
    color: "#000",
  },
});

export default Grid;
