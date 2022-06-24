import { StyleSheet } from "react-native";
import globals from "../../../../globalStyles/globals";

export const styles = StyleSheet.create({
  categoryCard: {
    alignItems: "center",
    marginLeft: 5,
    marginRight: 25,
    marginBottom: 10,
    marginVertical: 5,
  },
  categoryCardCircle: {
    width: 60,
    height: 60,
    backgroundColor: "#e9e9e9",
    borderRadius: 60 / 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  icon: {
    fontSize: 15,
    alignSelf: "center",
    alignItems: "center",
  },
  categoryName: {
    fontSize: 12,
    fontFamily: globals.normalText.fontFamily,
  },
});
