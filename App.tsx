import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/screens/BottomTabs.Navigator';
import { ContextProvider, FoodContext } from './src/context/FoodContext';
import { GameScreen } from './src/screens/Game.Screen ';

export default function App() {
  return (
  /*  <NavigationContainer>
     <ContextProvider>
        <Tabs/>
     </ContextProvider>
   </NavigationContainer> */
   <GameScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
