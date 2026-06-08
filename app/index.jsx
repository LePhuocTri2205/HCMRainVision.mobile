import { Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello Mưa Sài Gòn!</Text>
      <Text>Đây là Ngày 1 của dự án.</Text>
    </View>
  );
}