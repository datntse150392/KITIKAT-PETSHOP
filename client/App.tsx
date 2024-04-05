import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

/*
@Import component
*/
import HomeScreen from "./components/HomeScreen";
import MailBox from "./components/MailboxScreen";

/*
@Import library for icons
*/
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

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
            <AntDesign name="home" size={30} color={color} />
          ),
          tabBarLabel: "Trang chủ",
        }}
      />
      <Tab.Screen
        name="mailbox"
        component={MailBox}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="mail" size={30} color={color} />
          ),
          tabBarLabel: "Hôp thư",
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabAbout />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
