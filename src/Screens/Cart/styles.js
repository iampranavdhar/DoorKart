import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cartCard: {
    backgroundColor: "#e9e9e9",
    height: 150,
    flexDirection: "row",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  imageContainer: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
  },
  count: { fontSize: 25, marginLeft: 10, marginRight: 10 },
});
