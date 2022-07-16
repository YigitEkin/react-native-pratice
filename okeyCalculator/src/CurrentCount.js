import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CurrentCount = ({ currentCount }) => {
  return (
    <View style={styles.containerData}>
      <Text style={styles.title}>{currentCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerData: {
    width: "100%",
  },
});

export default CurrentCount;
