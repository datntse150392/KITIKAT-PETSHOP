import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";

/*
@import components*/
import Home from "./Home";
import DetailProductScreen from "./DetailProductScreen";
import PaymentScreen from "../PaymentScreen";
import PaymentMethodScreen from "../PaymentMethodScreen";
import SelectAddress from "../SelectAddressScreen";
import CategoryProductScreen from "../CategoryProductScreen";

/*
@import library icon
*/

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
        <Stack.Screen
          name="categoryProduct"
          component={CategoryProductScreen}
          options={{
            title: "Cát vệ sinh cho mèo",
            headerShown: true,
            headerLeftLabelVisible: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
