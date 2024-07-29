import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "main" }} />
    </Stack>
  );
}
