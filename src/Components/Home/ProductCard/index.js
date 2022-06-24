import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function ProductCard({
  productName,
  categoryName,
  color,
  price,
  image,
  id,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation?.push("ProductDetails", {
          id: id,
        })
      }
      style={{ borderBottomColor: color, ...styles.productCard }}
    >
      <View style={{ width: width * 0.4, ...styles.imageContainer }}>
        <Image
          style={{
            ...styles.productImage,
          }}
          source={{
            uri: image,
          }}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.categoryName}>{categoryName}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
}
