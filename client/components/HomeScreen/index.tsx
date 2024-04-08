import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import DetailProductScreen from "./DetailProductScreen";
import { SafeAreaView, View } from "react-native";
import PaymentScreen from "../PaymentScreen";

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
        <Stack.Screen
          name="payment"
          component={PaymentScreen}
          options={{
            title: "Thanh toán",
            headerShown: true,
            headerLeftLabelVisible: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
