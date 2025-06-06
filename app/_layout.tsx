import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen name={"(tabs)"} options={{ headerShown: false }} />
        {/*<Stack.Screen name={"movie/[id]"} options={{ headerShown: false }} />*/}
      </Stack>
    </>
  );
};

export default RootLayout;
