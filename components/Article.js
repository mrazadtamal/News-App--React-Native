import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

const Article = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://res.cloudinary.com/abidazad/image/upload/v1656176833/man-4594401_1280_pgdx7g.jpg",
          }}
        />
        <View>
          <Text style={styles.title}>Azad</Text>
        </View>
        <View>
          <Text style={styles.description}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
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
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: "400",
    marginTop: 10,
  },
});

export default Article;
