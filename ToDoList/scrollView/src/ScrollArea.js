import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ToDo from "./ToDo";

const ScrollArea = ({ data, remove }) => {
  return (
    <View style={styles}>
      <ScrollView style={styles.scrolView}>
        {data.map((item, index) => (
          <ToDo onPress={remove} key={index} value={item} id={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrolView: {
    width: "100%",
    height: "100%",
  },
});

export default ScrollArea;
