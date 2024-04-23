import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

/*
@Import library for icons
*/
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function SignInScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* Intro */}
      <LinearGradient
        // Button Linear Gradient
        colors={["#FF9480", "#FEA386", "#FFA286"]}
        style={styles.background}
      >
        <View style={styles.introContainer}>
          <Text style={styles.introFirstText}>Đăng nhập tài khoản</Text>
          <Text style={styles.introSecondText}>
            Vui lòng nhập thông tin của bạn
          </Text>
        </View>
      </LinearGradient>

      {/* Form SignIn */}
      <View style={styles.signInContainer}>
        <View style={styles.inputContainer}>
          <Feather name="phone" size={24} color="#818C9F" />
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
          />
          <Text style={styles.inputIcon}>10/10</Text>
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#818C9F" />
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            keyboardType="numeric"
          />
          <AntDesign
            style={styles.inputIcon}
            name="eyeo"
            size={24}
            color="#818C9F"
          />
        </View>

        {/* Forget password */}
        <Text style={styles.forgetPass}>Quên mật khẩu?</Text>

        {/* Button SignIn */}
        <TouchableOpacity style={styles.btnSignIn}>
          <Text style={styles.text}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>

      {/* Recommand Register */}
      <View style={styles.recommandContainer}>
        <Text style={styles.mainText}>
          Bạn chưa có tài khoản cửa hàng?
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{ fontWeight: "bold", color: "black" }}
          >
            {" "}
            Đăng ký ngay
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  introContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    top: "58%",
    left: "5%",
    backgroundColor: "",
  },
  introFirstText: {
    color: "black",
    fontSize: 25,
    fontWeight: "700",
  },
  introSecondText: {
    fontSize: 18,
    fontWeight: "300",
  },
  subIntro: {
    color: "#30384F",
    fontSize: 20,
    width: 250,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
  signInContainer: {
    gap: 30,
    top: 180,
    paddingTop: 50,
    paddingHorizontal: 35,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ECEBF1",
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
  },
  forgetPass: {
    display: "flex",
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
  inputIcon: {
    display: "flex",
    position: "absolute",
    right: 0,
  },
  btnSignIn: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#F8A36A",
    color: "white",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "#d9d9d9",
  },
  recommandContainer: {
    marginTop: 220,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 15,
    color: "#818C9F",
  },
});
