import { StyleSheet } from "react-native";
import globals from "../../../../globalStyles/globals";

export const styles = StyleSheet.create({
  productCard: {
    height: 300,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginBottom: 10,
    flexBasis: "49%",
  },
  productDetails: {
    marginLeft: 5,
    paddingBottom: 5,
  },
  productName: {
    fontSize: 14,
    fontFamily: globals.titleText.fontFamily,
    color: "#000",
  },
  categoryName: {
    fontSize: 12,
    fontFamily: globals.normalText.fontFamily,
    color: "#8D8D8D",
  },
  price:{
    fontSize:14,
    fontFamily:globals.titleText.fontFamily,
    color:"#f27805"
  },
  imageContainer: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
  },
});
