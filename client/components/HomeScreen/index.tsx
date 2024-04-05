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
} from "react-native";
import Carousel from "react-native-snap-carousel";
/*
@Import library for icons
*/
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen() {
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
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>DANH MỤC</Text>
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
    paddingVertical: 15,
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
    marginVertical: 20,
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
});
