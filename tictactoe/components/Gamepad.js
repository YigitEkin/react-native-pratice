import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import Grid from "./Grid";
import NewGameButton from "./newGameButton";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Gamepad = () => {
  const [gamePad, setGamePad] = useState([
    100, 100, 100, 100, 100, 100, 100, 100, 100,
  ]);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  const [currentCount, setCurrentCount] = useState(0);

  const resetGame = useCallback(() => {
    setGamePad([100, 100, 100, 100, 100, 100, 100, 100, 100]);
    setCurrentTurn(1);
    setWinner(null);
    setCurrentCount(0);
  }, []);

  const checkWin = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];

      if (
        gamePad[a] === gamePad[b] &&
        gamePad[b] === gamePad[c] &&
        gamePad[a] !== 100
      ) {
        return `${gamePad[a] === 1 ? "X" : "O"} WON!`;
      }
    }
    return null;
  };

  const pressHandler = (index) => {
    if (gamePad[index] === 100) {
      setGamePad((prevGamePad) => {
        const newGamePad = [...prevGamePad];
        newGamePad[index] = currentTurn;
        setGamePad(newGamePad);
      });
      setCurrentTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
      setCurrentCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    setWinner(checkWin());
  }, [gamePad]);

  useEffect(() => {
    if (currentCount === 9 && checkWin() === null) {
      setWinner("Draw!");
    }
  }, [currentCount]);
  return (
    <View style={styles.container}>
      {winner !== null ? (
        <>
          <Text style={styles.endGameText}>{winner}</Text>
          <NewGameButton resetGame={resetGame} />
        </>
      ) : (
        <View style={styles.container}>
          <Text style={styles.turnIndicator}>
            {currentTurn === 1 ? "X's Turn" : "O's Turn"}
          </Text>
          <Grid gamePad={gamePad} onPress={pressHandler} />
          <View style={styles.gameButton}>
            <NewGameButton resetGame={resetGame} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  turnIndicator: {
    flex: 1,
    marginTop: 20,
    color: "#444",
    fontSize: 30,
  },
  gameButton: {
    flex: 1,
  },
  endGameText: {
    color: "#444",
    fontSize: 50,
  },
});

export default Gamepad;
