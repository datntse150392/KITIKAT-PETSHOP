import {
  Text,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
/*
@import library icon
*/
import { AntDesign } from "@expo/vector-icons";

const dataImage = [
  {
    id: 1,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsoe1y3aemroda",
  },
  {
    id: 2,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqykjcvbqavta4",
  },
  {
    id: 3,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsoe1y3aemroda",
  },
  {
    id: 4,
    image:
      "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqykjcvbqavta4",
  },
];

const width = Dimensions.get("window").width;

export default function FeedBack({ img, name, price, salesVolume }: any) {
  return (
    <SafeAreaView>
      <View style={styles.feedbackContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://down-vn.img.susercontent.com/file/2fb5ef380baf6e1f6681f3e2ef28ae88_tn",
          }}
        ></Image>

        <View>
          {/* Name & Rate */}
          <View style={styles.name_reateContainer}>
            <Text style={{ fontSize: 12 }}>hoangminh17012004</Text>
            <View style={styles.rate}>
              <AntDesign name="star" size={12} color="#ee4d2d" />
              <AntDesign name="star" size={12} color="#ee4d2d" />
              <AntDesign name="star" size={12} color="#ee4d2d" />
              <AntDesign name="star" size={12} color="#ee4d2d" />
              <AntDesign name="star" size={12} color="#d9d9d9" />
            </View>
          </View>

          {/* Category feedback */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 12, color: "rgba(0,0,0,.54)" }}>
              2024-03-09 13:49 | Phân loại hàng: Túi 1.5KG (Hãng)
            </Text>
          </View>

          {/* Feedback */}
          <View>
            <Text style={{ paddingRight: 70 }}>
              Giá rẻ mua cho cún về ăn thử, mùi cug dễ ngửi có topping mà hơi ít
              xíu, giá thàng này cug chấp nhận ổn
            </Text>
            <FlatList
              data={dataImage}
              renderItem={(item) => (
                <Image
                  style={{
                    width: width < 380 ? 130 : 150,
                    height: 150,
                    alignSelf: "flex-start",
                    marginBottom: 10,
                    marginRight: 10,
                  }}
                  source={{
                    uri: item.item.image,
                  }}
                  resizeMode="contain"
                ></Image>
              )}
              style={styles.listImg}
              numColumns={2}
              scrollEnabled={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  feedbackContainer: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  name_reateContainer: {
    marginBottom: 10,
    gap: 3,
  },
  rate: {
    flexDirection: "row",
  },
  listImg: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
  },
});
