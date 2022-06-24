import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-gesture-handler";
import CategoryCard from "../../Components/Home/CategorCard";
import ProductCard from "../../Components/Home/ProductCard";
import moment from "moment";
import Toast from "../../Components/Toast/Toast";
import axios from "axios";
import { SearchBar } from "react-native-elements";

export default function Home({ navigation }) {
  const [greetingText, setGreetingText] = useState("");
  const [products, setProducts] = useState();

  useEffect(() => {
    if (moment().hour() >= 0 && moment().hour() < 12) {
      setGreetingText("Good Morning");
    } else if (moment().hour() >= 12 && moment().hour() < 16) {
      setGreetingText("Good Afternoon");
    } else if (moment().hour() >= 16 && moment().hour() <= 24) {
      setGreetingText("Good Evening");
    }
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?offset=0&limit=20"
      );
      setProducts(res.data);
    };
    getProducts();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.home}>
        <View style={styles.topBar}>
          <MaterialCommunityIcons
            name="golf-cart"
            size={30}
            color="black"
            onPress={() => Toast("Coming Soon")}
          />
          <Text style={styles.topBarText}>DoorKart</Text>
          <Ionicons
            name="notifications"
            size={30}
            color="black"
            onPress={() => Toast("Coming Soon")}
          />
        </View>
        <SearchBar
          placeholder="Search"
          lightTheme={true}
          containerStyle={{
            backgroundColor: "transparent",
            border: "none",
            elevation: 0,
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
            marginHorizontal:10
          }}
          inputContainerStyle={{
            backgroundColor: "#e9e9e9",
          }}
        />
        <ScrollView verticle showsVerticalScrollIndicator={false}>
          <View style={styles.welcomeMessage}>
            <Text style={styles.welcomeMessageNameText}>Hi! Pranavdhar</Text>
            <Text style={styles.welcomeMessageGreetingText}>
              {greetingText}
            </Text>
          </View>
          <View style={styles.categoriesSection}>
            <Text style={styles.categoriesTitle}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categories}
            >
              <CategoryCard
                icon={
                  <MaterialCommunityIcons
                    name="shoe-formal"
                    color={"#7F8C8D"}
                    size={40}
                  />
                }
                name={"Men"}
              />
              <CategoryCard
                icon={
                  <MaterialCommunityIcons
                    name="shoe-heel"
                    color={"#7F8C8D"}
                    size={40}
                  />
              }
                name={"Women"}
              />
              <CategoryCard
                icon={
                  <FontAwesome5 name="lightbulb" color={"#7F8C8D"} size={32} />
                }
                name={"Electric"}
              />
              <CategoryCard
                icon={<FontAwesome5 name="gift" color={"#7F8C8D"} size={32} />}
                name={"Hobbies"}
              />
              <CategoryCard
                icon={
                  <FontAwesome5 name="mobile-alt" color={"#7F8C8D"} size={32} />
                }
                name={"Mobiles"}
              />
            </ScrollView>
          </View>
          <View style={styles.products}>
            {products?.map((product, index) => (
              <ProductCard
                key={index}
                productName={product.title}
                categoryName={product.category.name}
                price={`$${product.price}`}
                color={"#9747FF"}
                image={product.images[0]}
                id={product.id}
              />
            ))}
          </View>
          <View style={styles.emptyContainer}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// (colors = "#E376AE"), "#FFD233", "#699BF7", "#9747FF", "#E376AE";
