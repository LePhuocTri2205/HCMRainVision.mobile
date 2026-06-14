import { Text, StyleSheet } from "react-native";

const typeStyles = {
  default: {},
  defaultSemiBold: styles.defaultSemiBold,
  title: styles.title,
  subtitle: styles.subtitle,
  link: styles.link,
};

export function ThemedText({ type = "default", style, ...rest }) {
  return <Text style={[styles.text, typeStyles[type], style]} {...rest} />;
}

const styles = StyleSheet.create({
  text: {
    color: "#11181c",
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  link: {
    color: "#0a7ea4",
  },
});
