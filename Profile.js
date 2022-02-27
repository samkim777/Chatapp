import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { React } from "react";

export default function Profile(props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.icon} source={props.profilepic} />
      </View>
      <View>
        <Text style={styles.roomHeader}> {props.name} </Text>
        <Text style={styles.roomText}>{props.message} </Text>
      </View>
      <View>
        <Text style={styles.roomTime}>{props.timeStamp}</Text>
      </View>
    </View>
  );
}

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
