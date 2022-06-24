import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { styles } from "./styles";
import {
  ScrollView,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function ProductDetails({ route }) {
  const [productDetails, setProductDetails] = useState();
  const { id } = route.params;

  useEffect(() => {
    const getProductDetails = async () => {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );

      setProductDetails(res.data);
    };
    getProductDetails();
  }, [id]);

  return (
    <View>
      <View
        style={{
          width: width,
          height: height * 0.4,
          ...styles.imagesContainer,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {productDetails?.images.map((uri, index) => (
            <Image
              key={index}
              style={{
                width: width,
                height: height * 0.4,
                ...styles.productImage,
              }}
              source={{
                uri: uri,
              }}
              resizeMode={"cover"}
            />
          ))}
        </ScrollView>
      </View>
      <Text style={styles.productTitle}>{productDetails?.title}</Text>
      <Text style={styles.categoryName}>{productDetails?.category.name}</Text>
      <Text style={styles.price}>${productDetails?.price}</Text>
      <View style={styles.descriptionSection}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{productDetails?.description}</Text>
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
