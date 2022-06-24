import { StyleSheet } from "react-native";
import globals from "../../../globalStyles/globals";

export const styles = StyleSheet.create({
  imagesContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  productImage: {
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
  },
  productTitle: {
    fontSize: 25,
    color: "#242424",
    fontFamily: globals.titleText.fontFamily,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  categoryName: {
    fontSize: 14,
    fontFamily: globals.normalText.fontFamily,
    color: "#8D8D8D",
    justifyContent: "center",
    alignSelf: "center",
  },
  price: {
    fontSize: 20,
    fontFamily: globals.titleText.fontFamily,
    color: "#f27805",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  descriptionSection: {
    paddingLeft: 15,
  },
  descriptionTitle: {
    fontSize: 20,
    fontFamily: globals.titleText.fontFamily,
  },
  description: {
    fontSize: 16,
    fontFamily: globals.normalText.fontFamily,
    alignSelf: "flex-start",
  },
  addToCartButton: {
    width: "95%",
    height: 50,
    alignSelf: "center",
    backgroundColor: "#00008B",
    marginTop: 50,
    borderRadius: 10,
  },
  addToCartText: {
    alignSelf: "center",
    fontFamily: globals.titleText.fontFamily,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    color: "#fff",
    fontSize: 18,
    marginTop:10
  },
});
