import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

const ChatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.icon} source={require("./ralo.jpeg")} />
      </View>
      <View>
        <Text style={styles.roomHeader}> Ralo </Text>
        <Text style={styles.roomText}>거 제육좀볶나...? </Text>
      </View>
      <View>
        <Text style={styles.roomTime}>11:29 pm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    right: 180,
    flexDirection: "row",
  },
  icon: {
    borderRadius: 50,
    width: 55,
    height: 50,
  },
  roomHeader: {
    top: 0,
    fontSize: 20,
    right: 5,
    fontWeight: "700",
  },
  roomText: {
    top: 0,
    fontSize: 15,
    fontWeight: "700",
  },
  roomTime: {
    top: 5,
    fontSize: 15,
    left: 70,
    color: `#1e90ff`,
  },
  profile: {
    marginRight: 30,
    top: 3,
  },
});

export default ChatList;
