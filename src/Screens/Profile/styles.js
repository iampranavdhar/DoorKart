import { StyleSheet } from "react-native";
import globals from "../../../globalStyles/globals";

export const styles = StyleSheet.create({
  profile: {
    paddingHorizontal: 20,
  },
  profileTopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 20,
    fontFamily: globals.titleText.fontFamily,
  },
  logOutIcon: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#F0E7E7",
    color: "#F24E1E",
    borderRadius: 10,
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 1500 / 2,
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 30,
  },
  userName: {
    fontSize: 20,
    fontFamily: globals.titleText.fontFamily,
    color: "#000",
  },
  emptyDiv: {
    height: 250,
    width: "100%",
  },
});
