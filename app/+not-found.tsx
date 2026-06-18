import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundRoute() {
  return (
    <View style={styles.container}>
      <Text style={styles.code}>404</Text>
      <Text style={styles.title}>Page not found</Text>
      <Text style={styles.description}>
        The screen you are looking for does not exist or has been moved.
      </Text>
      <Link href="/" style={styles.link}>
        Back to home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
  },
  code: {
    marginBottom: 8,
    color: "#0284c7",
    fontSize: 48,
    fontWeight: "800",
  },
  title: {
    color: "#0f172a",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    maxWidth: 320,
    marginTop: 10,
    color: "#475569",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  link: {
    marginTop: 24,
    color: "#0284c7",
    fontSize: 16,
    fontWeight: "700",
  },
});
