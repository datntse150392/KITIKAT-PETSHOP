import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import DetailProductScreen from "./DetailProductScreen";
import { SafeAreaView, View } from "react-native";
import PaymentScreen from "../PaymentScreen";
import PaymentMethodScreen from "../PaymentMethodScreen";
import MapScreen from "../SelectAddressScreen";
import SelectAddress from "../SelectAddressScreen";

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
        <Stack.Screen
          name="paymentMethod"
          component={PaymentMethodScreen}
          options={{
            title: "Phương thức thanh toán",
            headerShown: true,
            headerLeftLabelVisible: false,
          }}
        />
        <Stack.Screen
          name="selectAddress"
          component={SelectAddress}
          options={{
            title: "Chọn địa chỉ nhận hàng",
            headerShown: true,
            headerLeftLabelVisible: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
