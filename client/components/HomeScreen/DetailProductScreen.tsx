import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useEffect } from "react";

/*
@import library icon
*/
import { AntDesign } from "@expo/vector-icons";

/*
@import common component
*/
import FeedBack from "../Common/FeedBack";

export default function DetailProductScreen({ navigation }: any) {
  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);
  /**
   *
   * @param {number} price
   * @returns  {string} Giá sản phẩm đã được định dạng
   */
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          {/* Image */}
          <View style={styles.imageContainer}>
            <Image
              style={{ width: "100%", height: 400, alignSelf: "center" }}
              source={{
                uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsoe1y3aemroda",
              }}
              resizeMode="cover"
            ></Image>
            <View style={styles.groupBtnSetting}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backStepBtn}
              >
                <AntDesign name="arrowleft" size={24} color="#fff" />
              </Pressable>
            </View>
          </View>

          {/* Price & Name */}
          <View style={styles.P_NContainer}>
            <Text style={styles.textPrice}>{formatCurrency(1000000)} </Text>
            <Text style={styles.textName}>
              Cát đậu nành TAOTAOPETS cho mèo túi 6L ~ 2.2Kg, Cát vệ sinh cho
              mèo, hamster hữu cơ làm từ bã đậu nành, xả được bồn cầu{" "}
            </Text>
          </View>

          {/* Rate & SalesVolumn */}
          <View style={styles.R_SContainer}>
            <View style={styles.rate}>
              <AntDesign name="star" size={24} color="#ee4d2d" />
              <Text>4.9 / 5</Text>
            </View>
            <Text style={styles.salesVolumn}>Đã bán 98</Text>
          </View>

          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.desTitle}>Mô tả sản phẩm</Text>
            <Text style={styles.description}>
              Cát đậu nành TAOTAOPETS cho mèo túi 6L ~ 2.2Kg, Cát vệ sinh cho
              mèo hữu cơ làm từ bã đậu nành, xả được bồn cầu
            </Text>
            <Text style={styles.description}>📌 THÔNG TIN SẢN PHẨM:</Text>
            <Text style={styles.description}>
              - Tên sản phẩm: cát đậu nành hữu cơ TAOTAOPETS 6L.
            </Text>
            <Text style={styles.description}>- Quy cách: túi 6L ~ 2.2Kg.</Text>
            <Text style={styles.description}>- Hút chân không: có.</Text>
            <Text style={styles.description}>
              - Mùi: sữa, trà xanh, đào, lavender, than hoạt tính.
            </Text>
          </View>

          {/* Feedback */}
          <View style={styles.feedbackContainer}>
            <View style={styles.title_start}>
              <Text style={styles.desTitle}>Đánh giá sản phẩm</Text>
              <View style={styles.fbStar}>
                <AntDesign name="star" size={24} color="#ee4d2d" />
                <Text>
                  4.9 / 5 <Text style={styles.text}>(908 đánh giá)</Text>{" "}
                </Text>
              </View>
            </View>
            {/* Main*/}
            <View>
              <FeedBack />
              <FeedBack />
              <FeedBack />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.groupButton}>
        <Pressable style={styles.addToCart}>
          <AntDesign name="shoppingcart" size={24} color="#ee4d2d" />
          <Text style={{ fontSize: 12, color: "#ee4d2d" }}>
            Thêm vào giỏ hàng
          </Text>
        </Pressable>
        <Pressable style={styles.quickPayment}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
            Mua ngay
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    position: "relative",
    flex: 1,
  },
  P_NContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 5,
    padding: 15,
    backgroundColor: "#fff",
  },
  textPrice: {
    color: "#ee4d2d",
    fontSize: 20,
  },
  textName: {
    fontSize: 15,
  },
  R_SContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    gap: 10,
    alignItems: "center",
    paddingBottom: 10,
  },
  rate: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    borderRightWidth: 1,
    paddingRight: 10,
    borderColor: "#fff",
  },
  salesVolumn: {
    fontSize: 13,
  },
  descriptionContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: 10,
  },
  desTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
  },
  feedbackContainer: {
    marginTop: 10,
    backgroundColor: "#fff",
  },
  title_start: {
    padding: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 5,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "rgba(0,0,0, 0.1)",
  },
  fbStar: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#9e9e9e",
  },
  groupButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addToCart: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#ffc5b2",
  },
  quickPayment: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#ee4d2d",
  },
  imageContainer: {
    position: "relative",
  },
  groupBtnSetting: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backStepBtn: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 100,
  },
});
