import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <Slot/>
    <Stack>
      <Stack.Screen name="index" options={{ title: "Exercises" }} />
    </Stack>
  );
}
