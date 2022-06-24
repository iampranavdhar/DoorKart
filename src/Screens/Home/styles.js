import { StyleSheet } from "react-native";
import globals from "../../../globalStyles/globals";

export const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topBarText: {
    fontSize: 15,
    fontFamily: globals.titleText.fontFamily,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    resizeMode: "cover",
  },
  welcomeMessage: {
    paddingLeft: 20,
    paddingVertical: 30,
  },
  welcomeMessageNameText: {
    fontSize: 22,
    fontFamily: `${globals.titleText.fontFamily}`,
    color: "#242424",
    marginBottom: 5,
  },
  welcomeMessageGreetingText: {
    fontSize: 16,
    fontFamily: `${globals.normalText.fontFamily}`,
    color: "#242424",
  },
  categoriesSection:{
    width: "100%",
    paddingHorizontal: 20,
  },
  categories: {
    width: "100%",
    flexDirection: "row",
  },
  categoriesTitle: {
    fontSize: 18,
    color: "#242424",
    fontFamily: `${globals.titleText.fontFamily}`,
  },
  scheduleDate: {
    fontSize: 16,
    color: "#242424",
    fontFamily: `${globals.titleText.fontFamily}`,
    marginBottom: 15,
  },
  classCards: {
    width: "100%",
  },
  products: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 50,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  emptyContainer: {
    width: "100%",
    height: 200,
  },
});
