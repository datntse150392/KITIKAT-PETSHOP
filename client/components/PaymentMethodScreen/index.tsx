import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
/*
@import library icon
*/
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function PaymentMethodScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.methodContainer}>
        <View style={styles.method}>
          <View style={styles.wallet}>
            <Entypo name="wallet" size={24} color="#ee4d2d" />
            <Text style={{ fontSize: 14, fontWeight: "400" }}>Ví Kitikat</Text>
          </View>
        </View>
        <View style={styles.method}>
          <View style={styles.wallet}>
            <FontAwesome name="money" size={24} color="#ee4d2d" />
            <Text style={{ fontSize: 14, fontWeight: "400" }}>
              Thanh toán khi nhận hàng
            </Text>
          </View>
        </View>
      </ScrollView>

      <Pressable>
        <View
          style={{
            backgroundColor: "#FF691C",
            padding: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
            Đồng ý
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  methodContainer: {
    backgroundColor: "#d9d9d9",
  },
  method: { padding: 15, backgroundColor: "#fff" },
  wallet: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
  },
});
