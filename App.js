import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Form from "./src/components/Form";

export default function App() {
  return (
    <>
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        <Header />
        <Form />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#def7f7",
  },
});
