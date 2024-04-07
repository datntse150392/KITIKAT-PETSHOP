import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import DetailProductScreen from "./DetailProductScreen";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="detailProduct" component={DetailProductScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
