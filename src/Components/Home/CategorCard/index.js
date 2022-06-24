import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styles";

export default function CategorCard({ icon, name }) {
  return (
    <View style={styles.categoryCard}>
      <TouchableOpacity style={styles.categoryCardCircle}>
        <View style={styles.icon}>{icon}</View>
      </TouchableOpacity>
      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
}
