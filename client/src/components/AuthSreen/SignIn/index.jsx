import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.Bgimage}
        source={{
          uri: "https://i.pinimg.com/564x/44/35/b6/4435b62c543af18e78142450af022062.jpg",
        }}
      >
        {/* Intro */}
        <View style={styles.introContainer}>
          <Text style={styles.introFirstText}>Welcome to</Text>
          <Text style={styles.introSecondText}>KITIKAT </Text>
          <Text style={styles.subIntro}>
            Your favourite foods delivered fast at your door.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Bgimage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    opacity: 0.9,
  },
  introContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    position: "absolute",
    top: "10%",
    left: "5%",
  },
  introFirstText: {
    color: "black",
    fontSize: 40,
    fontWeight: "800",
  },
  introSecondText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FE724C",
  },
  subIntro: {
    color: "#30384F",
    fontSize: 20,
    width: 250,
  },
});
