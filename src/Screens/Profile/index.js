import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";

export default function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.profile}>
        <View style={styles.profileTopBar}>
          <Text style={styles.profileTitle}>Profile</Text>
          <TouchableOpacity>
            <MaterialCommunityIcons
              style={styles.logOutIcon}
              name="logout"
              size={30}
            />
          </TouchableOpacity>
        </View>
        <ScrollView verticle showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={styles.userImage}
              source={{
                uri: "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1525891879-379720-warren-wong-242286-unsplashjpg.jpg",
              }}
              resizeMode={"cover"} // cover or contain its upto you view look
            />
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <Text style={styles.userName}>Sai Pranavdhar</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
