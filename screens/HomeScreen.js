import React from "react";
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text> HomeScreen </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
