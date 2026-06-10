import { SafeAreaProvider } from "react-native-safe-area-context";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaProvider>

      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
