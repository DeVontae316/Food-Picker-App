import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyHistory} from "./History.Screen"
import { Home } from "./Home.Screen"

const BottomTabs = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={MyHistory} />
    </BottomTabs.Navigator>
  );
};