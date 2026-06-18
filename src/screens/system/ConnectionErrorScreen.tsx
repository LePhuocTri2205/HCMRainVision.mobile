import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { WifiOff } from "lucide-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ConnectionErrorScreenProps = {
  onRetry?: () => void;
};

export default function ConnectionErrorScreen({
  onRetry,
}: ConnectionErrorScreenProps) {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        <Center className="flex-1 px-8">
          <VStack className="w-full max-w-sm items-center gap-4">
            <WifiOff size={56} color="#0284c7" strokeWidth={1.8} />
            <Heading size="xl" className="text-center text-gray-900">
              Connection Error
            </Heading>
            <Text className="text-center text-base leading-6 text-gray-600">
              Unable to connect to the server. Please check your internet
              connection and try again.
            </Text>
            {onRetry ? (
              <Button size="lg" onPress={onRetry}>
                <ButtonText>Retry</ButtonText>
              </Button>
            ) : null}
          </VStack>
        </Center>
      </SafeAreaView>
    </View>
  );
}
