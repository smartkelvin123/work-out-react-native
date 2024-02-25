import { Slot, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Client = new QueryClient();

export default function RootLayout() {
  return (
    // <Slot/> behind the screen, the stack is rendering the slot
    <QueryClientProvider client={Client}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Exercises" }} />
      </Stack>
    </QueryClientProvider>
  );
}
