import React from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
/*
@import components
*/

/*
@import library icon
*/

/*
@import data
*/
import data from "../../assets/data/product.json";

import Product from "../Common/Product";

export default function CategoryProductScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
            scrollEnabled={false} // Tắt tính năng scroll
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  listProductContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
});
