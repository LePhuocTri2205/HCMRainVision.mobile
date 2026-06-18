import { Stack } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "Modal",
        }}
      />
    </Stack>
  );
}

export function ErrorBoundary({ error, retry }) {
  return (
    <Center className="flex-1 bg-white px-6">
      <VStack className="w-full max-w-sm items-center gap-4">
        <Heading size="xl" className="text-center text-gray-900">
          Something went wrong
        </Heading>
        <Text className="text-center text-gray-600">
          {error?.message ?? "The app hit an unexpected error."}
        </Text>
        <Button size="lg" onPress={retry}>
          <ButtonText>Try Again</ButtonText>
        </Button>
      </VStack>
    </Center>
  );
}
