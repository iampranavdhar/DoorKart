import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Toast from "../../Components/Toast/Toast";

const { width, height } = Dimensions.get("window");

export const CartCard = ({ image, count }) => {
  return (
    <View style={{ width: width * 0.9, ...styles.cartCard }}>
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
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5
          name="plus-circle"
          size={30}
          color="black"
          onPress={() => Toast("Coming Soon")}
        />
        <Text style={styles.count}>{count}</Text>
        <FontAwesome5
          name="minus-circle"
          size={30}
          color="black"
          onPress={() => Toast("Coming Soon")}
        />
      </View>
      <View>
        <MaterialCommunityIcons
          name="delete"
          size={50}
          color="#FF605C"
          onPress={() => Toast("Coming Soon")}
        />
      </View>
    </View>
  );
};

export default function CartScreen() {
  return (
    <SafeAreaView>
      <CartCard
        image={
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/47112d0a-dc23-4b74-876c-b638fecf0af2/air-jordan-1-retro-high-og-shoes-a7Zzxm.png"
        }
        count={5}
      />
      <CartCard
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy0bDm-rkuQJk7q2adX8xEgrPzUtEN7uw3jA&usqp=CAU"
        }
        count={2}
      />
    </SafeAreaView>
  );
}
