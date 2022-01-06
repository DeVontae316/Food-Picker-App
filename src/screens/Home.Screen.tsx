import React from "react";
import { View, Text ,StyleSheet} from "react-native";
import { MoodPicker } from "../components/MoodPicker";

export const Home: React.FC = () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <MoodPicker/>
  </View>
);


const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
       
    }
})