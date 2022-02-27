import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { React } from "react";
import ChatList from "./ChatList";
import ImageScreen from "./screens/Imagescreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.ralo} source={require("./profile.png")} />
      <Text style={styles.chatText}> Chats</Text>
      <Image style={styles.camera} source={require("./camera2.jpeg")} />
      <Image style={styles.pen} source={require("./pencil.jpeg")} />
      <View style={styles.chatList}>
        <ChatList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
    flexDirection: "row",
    top: 50,
    left: 20,
  },

  ralo: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  camera: {
    width: 30,
    height: 30,
    borderRadius: 30,
    left: 180,
    paddingHorizontal: 10,
  },
  pen: {
    width: 30,
    height: 30,
    borderRadius: 30,
    left: 190,
    paddingHorizontal: 10,
  },
  chatText: {
    fontSize: 25,
  },
  chatList: {
    borderRadius: 30,
  },
});
