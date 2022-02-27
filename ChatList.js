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
      <Pressable onPress={() => console.log("거 씨팔 사람이 낭만이없어")}>
        <Text>
          <Image style={styles.icon} source={require("./ralo.jpeg")} />
          <Text style={styles.row}>거 제육좀볶나...? </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    right: 150,
  },

  icon: {
    borderRadius: 50,
    width: 60,
    height: 100,
  },
  row: {
    fontSize: 20,
    margin: 30,
  },
});

export default ChatList;
