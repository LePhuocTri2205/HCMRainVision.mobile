import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { DatabaseZap } from "lucide-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type NoDataScreenProps = {
  onRefresh?: () => void;
};

export default function NoDataScreen({ onRefresh }: NoDataScreenProps) {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1">
        <Center className="flex-1 px-8">
          <VStack className="w-full max-w-sm items-center gap-4">
            <DatabaseZap size={56} color="#0284c7" strokeWidth={1.8} />
            <Heading size="xl" className="text-center text-gray-900">
              No Data Available
            </Heading>
            <Text className="text-center text-base leading-6 text-gray-600">
              There is no rain data available at the moment. Please check back
              later.
            </Text>
            {onRefresh ? (
              <Button size="lg" onPress={onRefresh}>
                <ButtonText>Refresh</ButtonText>
              </Button>
            ) : null}
          </VStack>
        </Center>
      </SafeAreaView>
    </View>
  );
}
