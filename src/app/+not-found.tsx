import { StyleSheet, View, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text>Page not found</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
