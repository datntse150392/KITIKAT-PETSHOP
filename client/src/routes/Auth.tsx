import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/AuthSreen/SignIn";
import SignUpScreen from "../components/AuthSreen/SignUP";
const Stack = createStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
