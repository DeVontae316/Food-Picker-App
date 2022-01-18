import React, { useState } from "react";
import { View, Text ,StyleSheet} from "react-native";
import { MoodPicker } from "../components/MoodPicker";
import { Mood } from "../types";

export const Home: React.FC = () => {

    const[sumbit,setSubmit] = useState<Mood | undefined>()
    return (
      <View style={styles.container}>
      <Text>Home</Text>
      <MoodPicker setSubmit={setSubmit}/>
    </View>
    )
}



const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
       
    }
})