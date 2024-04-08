import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
/*
@import library icon
*/
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PaymentScreen() {
  const navigateion = useNavigation();
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
    <SafeAreaView>
      <ScrollView>
        {/* Address */}
        <View style={styles.paymentContainer}>
          <View style={styles.addressContainer}>
            <Feather name="map-pin" size={20} color="#FF691C" />
            <TouchableOpacity
              onPress={() => navigateion.navigate("selectAddress")}
              style={styles.address}
            >
              <Text style={styles.addressTitle}>Địa chỉ nhận hàng</Text>
              <View style={styles.addressBody}>
                <Text style={styles.textNormal}>Nguyễn Văn A | 0918498961</Text>
                <Text style={styles.textNormal}>
                  123, Đường ABC, Phường DEF, Quận GHI, TP. Hồ Chí Minh dádaas
                  dsdsadas dsadsadas
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Store & list product */}
        <View style={styles.S_LContainer}>
          {/* Name of Store */}
          <View style={styles.nameOfStore}>
            <FontAwesome5 name="store" size={24} color="#FF691C" />
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Kitikat PetShop
            </Text>
          </View>

          {/* List Product */}
          <View style={styles.listProducrt}>
            <View style={styles.product}>
              <Image
                style={{ width: 80, height: 80 }}
                source={{
                  uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsoe1y3aemroda",
                }}
              ></Image>
              <View style={styles.productBody}>
                <Text
                  style={{ fontSize: 12, fontWeight: "400", paddingRight: 90 }}
                >
                  Cát đậu nành TAOTAOPETS cho mèo túi 6L ~ 2.2Kg, Cát vệ sinh
                  cho mèo, hamster hữu cơ làm từ bã đậu nành, xả được bồn cầu
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 90,
                  }}
                >
                  <Text style={styles.textNormal}>
                    {formatCurrency(100000)}
                  </Text>
                  <Text style={styles.textNormal}>x1</Text>
                </View>
              </View>
            </View>
            <View style={styles.product}>
              <Image
                style={{ width: 80, height: 80 }}
                source={{
                  uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsoe1y3aemroda",
                }}
              ></Image>
              <View style={styles.productBody}>
                <Text
                  style={{ fontSize: 12, fontWeight: "400", paddingRight: 90 }}
                >
                  Cát đậu nành TAOTAOPETS cho mèo túi 6L ~ 2.2Kg, Cát vệ sinh
                  cho mèo, hamster hữu cơ làm từ bã đậu nành, xả được bồn cầu
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingRight: 90,
                  }}
                >
                  <Text style={styles.textNormal}>
                    {formatCurrency(100000)}
                  </Text>
                  <Text style={styles.textNormal}>x1</Text>
                </View>
              </View>
            </View>

            {/* Total */}
            <View style={styles.totalPrice}>
              <Text style={[styles.textNormal, { fontWeight: "400" }]}>
                Tổng số tiền (2 sản phẩm)
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#FF691C" }}
              >
                {formatCurrency(200000)}
              </Text>
            </View>
          </View>
        </View>

        {/* Method Payment */}
        <View style={styles.paymentMethodContainer}>
          <View style={styles.paymentTitle}>
            <MaterialIcons name="currency-exchange" size={20} color="#FF691C" />
            <Text>Phương thức thanh toán</Text>
          </View>

          <Pressable
            onPress={() => navigateion.navigate("paymentMethod")}
            style={styles.paymentOptions}
          >
            <Text>Thanh toán khi nhận hàng</Text>
            <AntDesign name="right" size={18} color="grey" />
          </Pressable>
        </View>

        {/* Payment Detail */}
        <View style={styles.paymentDetailContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 15,
            }}
          >
            <FontAwesome5 name="file-invoice" size={24} color="#FF691C" />
            <Text>Chi tiết thanh toán</Text>
          </View>

          <View>
            <View style={styles.payment}>
              <Text style={styles.textPaymentDetail}>Tổng tiền hàng</Text>
              <Text style={styles.textPaymentDetail}>
                {formatCurrency(200000)}
              </Text>
            </View>
            <View style={styles.payment}>
              <Text style={styles.textPaymentDetail}>
                Phí vận chuyển (dự kiến)
              </Text>
              <Text style={styles.textPaymentDetail}>
                {formatCurrency(15000)}
              </Text>
            </View>
          </View>
          <View style={styles.totalPrice}>
            <Text style={[styles.textNormal, { fontWeight: "400" }]}>
              Tổng thanh toán
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#FF691C" }}
            >
              {formatCurrency(215000)}
            </Text>
          </View>
        </View>

        {/* Rule*/}
        <View style={styles.rules}>
          <FontAwesome5 name="file-contract" size={24} color="#FF691C" />
          <View style={{ paddingRight: 20 }}>
            <Text>
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo
              <Text style={{ color: "#05a" }}>
                {" "}
                Điều khoản của Kitikat PetShop
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Button */}
      <View>
        <Pressable>
          <View
            style={{
              backgroundColor: "#FF691C",
              padding: 15,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
              Đặt hàng
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  addressContainer: {
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    padding: 15,
    gap: 10,
  },
  address: {
    paddingRight: 10,
    flexDirection: "column",
    gap: 5,
  },
  addressTitle: {
    fontWeight: "500",
  },
  addressBody: {
    flexDirection: "column",
  },
  S_LContainer: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "#fff",
  },
  nameOfStore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  listProducrt: {
    flexDirection: "column",
    gap: 10,
  },
  product: {
    padding: 10,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  productBody: {
    flexDirection: "column",
    gap: 10,
  },
  textNormal: {
    fontSize: 15,
    fontWeight: "300",
  },
  totalPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: "#e0e0e0",
  },
  paymentMethodContainer: {
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  paymentTitle: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  paymentOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 2,
  },
  rules: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  paymentDetailContainer: {
    marginTop: 5,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  payment: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  textPaymentDetail: {
    fontSize: 13,
    fontWeight: "300",
  },
});
