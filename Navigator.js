import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/Screens/Home";
import Profile from "./src/Screens/Profile";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import ProductDetails from "./src/Screens/ProductDetails";
import globals from "./globalStyles/globals";
import CartScreen from "./src/Screens/Cart";
const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CartStack = createStackNavigator();

const headerStyle = {
  headerShown: true,
  headerStyle: {
    backgroundColor: "#fff",
    height: 100,
  },
  headerTitleStyle: {
    fontFamily: globals.titleText.fontFamily,
    marginRight: "auto",
    color: "#242424",
  },
  headerTitleAlign: "center",
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

const CartStackScreen = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="CartScreen" component={CartScreen} />
    </CartStack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          borderRadius: 2,
          height: 60,
          ...styles.shadow,
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="ios-home-outline"
                size={25}
                color={focused ? "#e91e63" : "#545051"}
              />
              <Text style={{ color: focused ? "#e91e63" : "#545051" }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <SimpleLineIcons
                name="handbag"
                size={25}
                color={focused ? "#e91e63" : "#545051"}
              />
              <Text style={{ color: focused ? "#e91e63" : "#545051" }}>
                Bag
              </Text>
            </View>
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: "transparent",
            height: 100,
          },
          headerTitleStyle: {
            fontFamily: globals.titleText.fontFamily,
            marginRight: "auto",
            color: "#242424",
          },
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <FontAwesome5
                name="user"
                size={25}
                color={focused ? "#e91e63" : "#545051"}
              />
              <Text style={{ color: focused ? "#e91e63" : "#545051" }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="MainTabs" component={MainTabs} />
        <MainStack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={headerStyle}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
