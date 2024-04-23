import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Auth";
import AppStack from "./App";
import { StyleSheet, SafeAreaView } from "react-native";
const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export default function Router({ isLogged }: any) {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaView}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {!isLogged ? (
            <RootStack.Screen
              name="Auth"
              component={AuthStack}
              options={{
                animationEnabled: false,
              }}
            />
          ) : (
            <RootStack.Screen
              name="App"
              component={AppStack}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
