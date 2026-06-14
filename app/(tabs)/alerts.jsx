import { StyleSheet, Text, View } from "react-native";

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cảnh báo</Text>
      <Text style={styles.description}>
        Màn hình cảnh báo sẽ hiển thị các thông báo mưa lớn và khu vực cần chú ý.
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
