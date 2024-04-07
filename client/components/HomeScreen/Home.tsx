import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import Carousel from "react-native-snap-carousel";
/*
@Import common component
*/
import Product from "../Common/Product";
/*
@Import library for icons
*/
import { AntDesign } from "@expo/vector-icons";
/*
@import data
*/
import data from "../../assets/data/product.json";
export default function Home() {
  // Render item for carousel
  const _renderItem = ({ item, index }: any) => {
    return (
      <View
        style={{
          borderRadius: 10,
          height: 200,
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          {/* Username & Logo */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Chào, Nguyễn Thành Đạt</Text>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/kitikat-c6488.appspot.com/o/Common%2Fkitikat_logo.png?alt=media&token=fc03510b-6019-457d-a721-af4eaa3400f8",
              }}
              style={styles.infoLogo}
            ></Image>
          </View>

          {/* Wallet & point & cart */}
          <View style={styles.W_P_C_Contaier}>
            {/* Wallet & point */}
            <View style={styles.walletContainer}>
              <View style={styles.accumPts}>
                <AntDesign name="wallet" size={20} color="black" />
                <Text> 0 </Text>
              </View>
            </View>
            {/* Cart & search*/}
            <View style={styles.Cart_Search_Conntainer}>
              <AntDesign
                style={styles.iconStyle}
                name="search1"
                size={20}
                color="black"
              />

              <AntDesign
                style={styles.iconStyle}
                name="shoppingcart"
                size={20}
                color="black"
              />
            </View>
          </View>

          {/* Carousel */}
          <View>
            <Carousel
              // 800x400 is the size of your images
              itemWidth={Dimensions.get("window").width}
              sliderWidth={Dimensions.get("window").width}
              data={[
                {
                  imageUrl:
                    "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimo32qh71.webp",
                },
                {
                  imageUrl:
                    "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnqfmhae.webp",
                },
                {
                  imageUrl:
                    "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnru6xe2.webp",
                },
                {
                  imageUrl:
                    "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnt8rd50.webp",
                },
                {
                  imageUrl:
                    "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnunbt7e.webp",
                },
                {
                  imageUrl:
                    "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnw1w9dd.webp",
                },
              ]}
              renderItem={_renderItem}
              loop={true}
              autoplay={true} // Bật tính năng tự động chạy
              autoplayInterval={7000} // Thời gian giữa mỗi lần chuyển slide
            />
          </View>

          {/* Categories */}
          <View style={styles.categoriesContainer}>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
            >
              DANH MỤC
            </Text>
            {/* Category List 1*/}
            <View style={styles.categoriesList}>
              <View style={styles.category}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhtmkxd1s2o5e3_tn",
                  }}
                ></Image>
                <Text style={styles.categoryText}>Cát vệ sinh</Text>
              </View>
              <View style={styles.category}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://down-bs-vn.img.susercontent.com/vn-11134207-7qukw-ljzzrvq4phqa2e_tn.webp",
                  }}
                ></Image>
                <Text style={styles.categoryText}>Dinh dưỡng</Text>
              </View>
              <View style={styles.category}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://down-bs-vn.img.susercontent.com/vn-11134207-7r98o-ls1foswu5ghwbf_tn.webp",
                  }}
                ></Image>
                <Text style={styles.categoryText}>Dụng cụ vệ sinh</Text>
              </View>
            </View>
            {/* Category List 2*/}
            <View style={styles.categoriesList}>
              <View style={styles.category}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrxdtexpl39gf3_tn",
                  }}
                ></Image>
                <Text style={styles.categoryText}>Hạt </Text>
              </View>
              <View style={styles.category}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnsbkyb2ubcd7c_tn",
                  }}
                ></Image>
                <Text style={styles.categoryText}>Pate </Text>
              </View>
              <View style={styles.category}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={{
                    uri: "https://down-vn.img.susercontent.com/file/3f4c0b79e295d67024f7fe1ebdf06934_tn",
                  }}
                ></Image>
                <Text style={styles.categoryText}>Phụ kiện</Text>
              </View>
            </View>
          </View>

          {/* Product suggestions */}
          <View style={styles.productSuggestion}>
            <View style={styles.textSuggestionContainer}>
              <Text style={styles.textSuggestion}>Gợi ý cho bạn</Text>
            </View>
            {/* List Product */}
            <View style={styles.listProductContainer}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Product
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    salesVolume={item.salesVolume}
                  />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2} // Thiết lập mỗi hàng có 2 cột
              />
            </View>
          </View>

          {/* Best Sellers*/}
          <View>
            <Image
              style={{ width: "100%", height: 150 }}
              source={{
                uri: "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnp12177.webp",
              }}
              resizeMode="contain"
            ></Image>
            <View
              style={[styles.listProductContainer, { paddingHorizontal: 20 }]}
            >
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Product
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    salesVolume={item.salesVolume}
                  />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2} // Thiết lập mỗi hàng có 2 cột
              />
            </View>
          </View>

          {/* Pate Category */}
          <View>
            <Image
              style={{ width: "100%", height: 150 }}
              source={{
                uri: "https://down-tx-vn.img.susercontent.com/vn-11134210-7r98o-lrvoyimnunbt7e.webp",
              }}
              resizeMode="contain"
            ></Image>
            <View
              style={[styles.listProductContainer, { paddingHorizontal: 20 }]}
            >
              <FlatList
                data={data}
                renderItem={({ item }) =>
                  item.category === "pate" ? (
                    <Product
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      salesVolume={item.salesVolume}
                    />
                  ) : null
                }
                keyExtractor={(item) => item.id}
                numColumns={2} // Thiết lập mỗi hàng có 2 cột
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      },
    }),
  },
  infoContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 15,
    fontWeight: "600",
  },
  infoLogo: {
    height: 70,
    width: 70,
  },
  W_P_C_Contaier: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  accumPts: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    gap: 5,
  },
  Cart_Search_Conntainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconStyle: {
    alignItems: "center",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    gap: 5,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoriesList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  category: {
    width: "33.33%",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 14,
    marginTop: 5,
    color: "rgba(0, 0, 0, 0.7)",
  },
  productSuggestion: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  textSuggestionContainer: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#012CA8",
  },
  textSuggestion: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  listProductContainer: {
    marginVertical: 10,
  },
});
