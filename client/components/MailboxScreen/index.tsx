import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
export default function MailBox() {
  return (
    <View style={styles.container}>
      <Text>MailBox Screen</Text>
      <StatusBar style="auto" />
    </View>
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
