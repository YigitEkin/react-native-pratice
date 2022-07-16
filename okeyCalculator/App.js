import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CurrentCount from "./src/CurrentCount";
import OkeyTasi from "./src/OkeyTasi";
import OkeyTasiYan from "./src/OkeyTasıYan";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.tasArea}>
        <CurrentCount currentCount={count} />
        {count !== 0 &&
          (count >= 101 ? (
            <Text
              style={{
                width: "100%",
                color: "green",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Açar Yapıştır
            </Text>
          ) : (
            <Text
              style={{
                width: "100%",
                color: "red",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Nah Açar
            </Text>
          ))}
        <Text style={styles.perEkleTitle}>Per Ekle:</Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
          <OkeyTasi key={item} count={item} setCount={setCount} />
        ))}
        <Text style={styles.perEkleTitle}>Yan Ekle:</Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
          <OkeyTasiYan key={item} count={item} setCount={setCount} />
        ))}
      </View>
      <Button
        style={styles.buttonReset}
        onPress={() => {
          setCount(0);
        }}
        title="Sıfırla"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  count: {
    fontSize: 30,
    fontWeight: "bold",

    color: "red",
  },

  button: {
    color: "#fff",
    backgroundColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: "#ddd",
  },

  perEkleTitle: {
    fontSize: 30,
    fontWeight: "bold",

    marginTop: 20,
    width: "100%",
  },

  tasArea: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 50,
  },

  buttonReset: {
    color: "#fff",
    backgroundColor: "red",
    padding: 10,
  },
});
