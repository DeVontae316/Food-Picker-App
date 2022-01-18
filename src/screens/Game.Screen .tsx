import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  FlatList,
  Button,
} from "react-native";

/* const createRGBA = (numberOfColors: number) => {
  let colors = [];
  for (let i = 0; i < numberOfColors; i++) {
    let random = Math.floor(Math.random() * 255 + 1);
    colors.push(random);
  }
  console.log(colors);
  return `rgba(${colors[0]},${colors[1]},${colors[2]},${colors[3]})`;
}; */
type Data = {
  id: number;
  name: string;
};

type Array = {
  id: number;
  name: string;
};
const dataA = [
  { id: 1, name: "apple" },
  { id: 2, name: "about" },
  { id: 3, name: "adjective" },
  { id: 4, name: "acorn" },
  { id: 5, name: "assumption" },
  { id: 6, name: "adjust" },
  { id: 7, name: "abs" },
  { id: 8, name: "alive" },
  { id: 9, name: "amen" },
  { id: 10, name: "anxious" },
  { id: 11, name: "adnormal" },
  { id: 12, name: "anna" },
];
const dataB = [
  { id: 1, name: "bob" },
  { id: 2, name: "billy" },
  { id: 3, name: "better" },
  { id: 4, name: "before" },
  { id: 5, name: "beat" },
  { id: 6, name: "breath" },
  { id: 7, name: "bee" },
  { id: 8, name: "base" },
  { id: 9, name: "bat" },
  { id: 10, name: "behave" },
  { id: 11, name: "best" },
  { id: 12, name: "boast" },
];
const dataC = [
  { id: 1, name: "cat" },
  { id: 2, name: "comb" },
  { id: 3, name: "caution" },
  { id: 4, name: "corn" },
  { id: 5, name: "can't" },
  { id: 6, name: "color" },
  { id: 7, name: "church" },
  { id: 8, name: "curious" },
  { id: 9, name: "children" },
  { id: 10, name: "curry" },
  { id: 11, name: "cool" },
  { id: 12, name: "cobra" },
];
const dataD = [
  { id: 1, name: "don't" },
  { id: 2, name: "did" },
  { id: 3, name: "different" },
  { id: 4, name: "donut" },
  { id: 5, name: "doug" },
  { id: 6, name: "dennis" },
  { id: 7, name: "dog" },
  { id: 8, name: "dentist" },
  { id: 9, name: "denise" },
  { id: 10, name: "diet" },
  { id: 11, name: "dye" },
  { id: 12, name: "doodle" },
];

export const GameScreen = () => {
  const [stateA, setStateA] = useState<any>(dataA);
  const [stateB, setStateB] = useState<any>(dataB);
  const [stateC, setStateC] = useState<any>(dataC);
  const [stateD, setStateD] = useState<any>(dataD);
  const [intervalId, setIntervalId] = useState(null);
  const [obj, setObj] = useState({
    word1: "",
    word2: "",
    word3: "",
    word4: "",
    word5: "",
    word6: "",
    word7: "",
    word8: "",
    word9: "",
    word10: "",
    word11: "",
    word12: "",
  });
  const [play, setPlay] = useState(false);
  const [randomArray, setRandomArray] = useState<Array[]>();
  const [randomPick, setRandomPick] = useState<Data | null>();
  const [id, setId] = useState<number>();

  const pickRandomArray = () => {
    const randomPick = ["dataA", "dataB", "dataC", "dataD"];
    let pick = Math.floor(Math.random() * randomPick.length - 1 + 1);

    console.log(`pick:${pick}`);

    if (randomPick[pick] === "dataA") return dataA;
    if (randomPick[pick] === "dataB") return dataB;
    if (randomPick[pick] === "dataC") return dataC;
    if (randomPick[pick] === "dataD") return dataD;
  };

  useEffect(() => {
    if (randomArray && play) {
      const interval = setInterval(() => {
        console.log("setInterval running");
        let pickOut = {
          index: Math.floor(Math.random() * randomArray.length - 1 + 1),
        };

        /* setRandomPick(randomArray[pickOut.index]); */

        console.log(`index${pickOut.index}`);
        let updatedArray = randomArray.filter(
          (i) => i !== randomArray[pickOut.index]
        );

        console.log("update array below:");
        console.log(updatedArray);
        if (randomArray[0].name.startsWith("a")) {
          setStateA([...updatedArray]);
          setRandomArray(updatedArray);
        }
        if (randomArray[0].name.startsWith("b")) {
          setStateB([...updatedArray]);
          setRandomArray(updatedArray);
        }
        if (randomArray[0].name.startsWith("c")) {
          setStateC([...updatedArray]);
          setRandomArray(updatedArray);
        }
        if (randomArray[0].name.startsWith("d")) {
          setStateD([...updatedArray]);
          setRandomArray(updatedArray);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [
    play,
    setPlay,
    setStateA,
    setStateB,
    setStateC,
    setStateD,
    setRandomArray,
    setRandomPick,
    setId,
    stateA,
    stateB,
    stateC,
    stateD,
    randomArray,
    randomPick,
    id,
  ]);

  useEffect(() => {
    if (play) {
      console.log("use effect hit");

      console.log(play ? "playing" : "not playing");
      const interval = setTimeout(() => {
        console.log("settimeout running");
        const pick = {
          data: pickRandomArray(),
          /* id: Math.floor(Math.random() * 12 + 1), */
        };
        setRandomArray(pick.data);
        console.log("data below:");
        console.log(pick.data);
        console.log(play ? "playing" : "not playing");

        //update Array
      }, 1000);
      /* setIntervalId(interval); */
      /*  return () => clearInterval(interval); */
    }
  }, [play, setPlay]);
  return (
    <>
      <View style={{ marginTop: 45 }}>
        <Button
          title={play ? "stop" : "go"}
          onPress={() => setPlay((play) => !play)}
        />
        <Text style={{ color: "black" }}>{play ? "true" : "false"}</Text>
      </View>
      <View
        style={{
          /* marginTop: Platform.OS === "android" && 45, */
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <FlatList
          scrollsToTop
          data={stateA}
          keyExtractor={(key) => key.id.toString()}
          renderItem={({ item }): JSX.Element => {
            return (
              <View>
                <View
                  style={[styles.squares, { backgroundColor: "dodgerblue" }]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item?.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <FlatList
          scrollsToTop
          data={stateB}
          keyExtractor={(key) => key.id.toString()}
          renderItem={({ item }): JSX.Element => {
            return (
              <View>
                <View
                  style={[styles.squares, { backgroundColor: "dodgerblue" }]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <FlatList
          scrollsToTop
          data={stateC}
          keyExtractor={(key) => key.id.toString()}
          renderItem={({ item }): JSX.Element => {
            return (
              <View>
                <View
                  style={[styles.squares, { backgroundColor: "dodgerblue" }]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item.name}
                  </Text>
                </View>
              </View>
            );
          }}
        />
        <FlatList
          data={stateD}
          scrollsToTop
          keyExtractor={(key) => key.id.toString()}
          renderItem={({ item }): JSX.Element => {
            return (
              <TouchableWithoutFeedback>
                <View
                  style={[styles.squares, { backgroundColor: "dodgerblue" }]}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      <View />

      <Button title="Submit" onPress={() => console.log(obj)} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  squares: {
    width: "100%",
    margin: 10,
  },
});
