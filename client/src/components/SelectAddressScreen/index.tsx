import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ListRenderItemInfo,
} from "react-native";

// Define the types for your address object
type Address = {
  id: string;
  name: string;
  phone: string;
  address: string;
  isDefault: boolean;
};

const SelectAddress: React.FC = () => {
  // Initialize the state with TypeScript type
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      name: "Dũng Đỗ",
      phone: "(+84) 857 769 684",
      address:
        "1426/40/59, Nguyễn Duy Trinh, Phường Long Trường, Thành Phố Thủ Đức, TP. Hồ Chí Minh",
      isDefault: false,
    },
    {
      id: "2",
      name: "Nguyễn Văn Khang",
      phone: "(+84) 846 610 066",
      address: "327 ẤP BÌNH ĐÌNH, Xã Bình Thạnh, Huyện Thanh Bình, Đồng Tháp",
      isDefault: true,
    },
  ]);

  const renderItem = ({ item }: ListRenderItemInfo<Address>) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => console.log("Edit Address")}
    >
      <Text style={styles.name}>
        {item.name} <Text style={styles.phone}>| {item.phone}</Text>
      </Text>
      <Text style={styles.address}>{item.address}</Text>
      {item.isDefault && <Text style={styles.defaultLabel}>Mặc định</Text>}
      {/* You can add edit icons or buttons here */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={addresses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // Add other props if needed
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => console.log("Add Address")}
      >
        <Text style={styles.addButtonText}>Thêm Địa Chỉ Mới</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    // Add more styling
  },

  name: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  phone: {
    // Add styling
    fontWeight: "300",
  },
  address: {
    // Add styling
    fontWeight: "300",
  },
  defaultLabel: {
    marginTop: 10,
    width: 80,
    color: "red",
    borderWidth: 1,
    padding: 5,
    borderColor: "red",
    textAlign: "center",
    // Add more styling
  },
  addButton: {
    backgroundColor: "#FF691C",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    // Add more styling
  },
  // Add more styles as needed
});

export default SelectAddress;
