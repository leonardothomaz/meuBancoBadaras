import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/logobank.png")}
        />
        <Text style={styles.font}>Banco Badaras</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#def7f7",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 175,
    height: 175,
  },
  font: {
    fontSize: 30,
    color: "#11727c",
    fontWeight: "bold",
  },
});
