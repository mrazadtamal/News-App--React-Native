import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";

const Article = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Azad</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/abidazad/image/upload/v1656177254/pexels-victor-freitas-841130_1_fa9j0v.jpg",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/abidazad/image/upload/v1656177041/pexels-cesar-gale%C3%A3o-3253501_1_ieuyar.jpg",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://res.cloudinary.com/abidazad/image/upload/v1656176833/man-4594401_1280_pgdx7g.jpg",
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },

  image: {
    height: 200,
    width: "100%",
    borderRadius: 8,
  },
});

export default Article;
