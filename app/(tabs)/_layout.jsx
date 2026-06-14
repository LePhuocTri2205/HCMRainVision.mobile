import { Tabs } from "expo-router";
import { Bell, List, Map } from "lucide-react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "@/src/theme/colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.tabIconDefault,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Bản đồ",
          headerTitle: "Bản đồ mưa",
          tabBarIcon: ({ color }) => (
            <Map size={24} color={color} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Danh sách",
          headerTitle: "Danh sách điểm mưa",
          tabBarIcon: ({ color }) => (
            <List size={24} color={color} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: "Cảnh báo",
          headerTitle: "Cảnh báo mưa",
          tabBarIcon: ({ color }) => (
            <Bell size={24} color={color} strokeWidth={2.2} />
          ),
        }}
      />
    </Tabs>
  );
}
