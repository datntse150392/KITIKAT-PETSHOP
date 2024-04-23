import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
/**
 * Cắt chuỗi văn bản để chỉ hiển thị một phần của nó.
 * @param {string} text Đoạn văn bản đầy đủ cần được hiển thị một phần.
 * @param {number} maxLength Số ký tự tối đa được hiển thị.
 * @returns {string} Chuỗi văn bản đã được cắt ngắn.
 */
const truncateText = (text: any, maxLength: number) => {
  // Kiểm tra nếu độ dài của đoạn văn bản dài hơn giới hạn cho phép
  if (text.length > maxLength) {
    // Cắt chuỗi và thêm "..." vào cuối để biểu thị đoạn văn bản đã bị cắt
    return text.substring(0, maxLength) + "...";
  } else {
    // Nếu đoạn văn bản không dài hơn giới hạn, trả về nguyên văn
    return text;
  }
};

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

export default function Product({ img, name, price, salesVolume }: any) {
  const navigation = useNavigation();
  return (
    <View style={styles.productContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("detailProduct")}>
        <Image
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={{
            uri: `${img}`,
          }}
          resizeMode="contain"
        ></Image>
        <Text style={styles.textProduct}>{truncateText(name, 50)}</Text>

        {/* Price & Sale Volume */}
        <View style={styles.P_SV_Container}>
          <Text style={styles.textPrice}>{formatCurrency(price)} </Text>
          <Text style={styles.textSalesVolume}>Đã bán {salesVolume} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    width: "48%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
    margin: 4,
  },
  textProduct: {
    marginTop: 10,
    fontSize: 12,
  },
  P_SV_Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textPrice: {
    color: "#ee4d2d",
  },
  textSalesVolume: {
    color: "#767676",
    fontSize: 12,
  },
});
