import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/abidazad/image/upload/v1656177254/pexels-victor-freitas-841130_1_fa9j0v.jpg",
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},

  image: {
    height: 200,
    width: "100%",
  },
});

export default Article;
