import { StyleSheet, Text, View } from "react-native";

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách</Text>
      <Text style={styles.description}>
        Màn hình này sẽ liệt kê các điểm mưa, cảm biến hoặc báo cáo mới nhất.
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
