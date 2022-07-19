import { StyleSheet, Text, View, StatusBar } from "react-native";
import InShortTabs from "./components/InShortTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <InShortTabs />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    marginTop: StatusBar.currentHeight,
  },
});
