import React from "react";
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import Article from "../components/Article";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Article />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
