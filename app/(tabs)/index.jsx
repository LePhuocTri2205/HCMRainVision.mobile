import { StyleSheet, Text, View } from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bản đồ</Text>
      <Text style={styles.description}>
        Màn hình bản đồ sẽ hiển thị vị trí và dữ liệu mưa theo khu vực.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
  },
  title: {
    color: "#0f172a",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    color: "#475569",
    fontSize: 16,
    lineHeight: 24,
  },
});
