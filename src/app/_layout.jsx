import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <Slot/> behind the screen, the stack is rendering the slot
    <Stack>
      <Stack.Screen name="index" options={{ title: "Exercises" }} />
    </Stack>
  );
}
