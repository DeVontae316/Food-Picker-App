
import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet, Button } from "react-native";
import { Mood } from  "../types"

const moods: Mood[] = [
  { emoji: "🧁", name: "cupcake" },
  { emoji: "🍕", name: "pizza" },
  { emoji: "🍔", name: "hamburger" },
  { emoji: "🍏", name: "apple" },
  { emoji: "🍤", name: "shrimp" },
];

export const MoodPicker: React.FC = () => {
  const [selectedItem, setSelectItem] = useState<Mood>();
  const handlePress = (obj: Mood) => {
    setSelectItem(obj);
  };
  return (
    <>
      <View style={[styles.foodsContainer]}>
        <View style={styles.header}>
          <Text>What is your favorite food?</Text>
        </View>

        <View style={styles.wrapper}>
          {moods.map((food) => (
            <View style={[styles.foodContainer]} key={food.name}>
              <Pressable
                onPress={() => handlePress(food)}
                style={[
                  food.emoji === selectedItem?.emoji
                    ? styles.pressed
                    : styles.notPressed,
                ]}
              >
                <Text style={styles.emoji}>{food.emoji}</Text>
              </Pressable>
              <Text>
                {food.name === selectedItem?.name ? selectedItem.name : null}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Choose</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "purple",
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 15,
    width: 120,
    padding: 3,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 13,
  },
  foodContainer: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 24,
  },
  header: {
    /* justifyContent: "center", */
    alignItems: "center",
    marginBottom: 20,
  },
  main: {
    flexDirection: "column",
  },

  foodsContainer: {
    margin: 20,
    paddingHorizontal: 20,
    borderWidth: 8,
    borderColor: "purple",
    borderRadius: 10,
    padding: 20,
  },
  notPressed: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
  },
});
