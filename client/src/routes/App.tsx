import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
/*
@Import component
*/
import MailBox from "../components/MailboxScreen";
import HomeScreen from "../components/HomeScreen";
/*
@Import library for icons
*/
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const TabAbout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#012CA8",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          tabBarLabel: "Trang chủ",
        }}
      />
      <Tab.Screen
        name="mailbox"
        component={MailBox}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="mail" size={24} color={color} />
          ),
          tabBarLabel: "Hôp thư",
        }}
      />
      <Tab.Screen
        name="mailboxs"
        component={MailBox}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          ),
          tabBarLabel: "Tài khoản",
        }}
      />
    </Tab.Navigator>
  );
};
export default function AppStack() {
  return <TabAbout></TabAbout>;
}
