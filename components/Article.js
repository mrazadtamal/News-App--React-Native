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
        <View>
          <Text>Azad</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://res.cloudinary.com/abidazad/image/upload/v1656176833/man-4594401_1280_pgdx7g.jpg",
            }}
          />
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
});

export default Article;
