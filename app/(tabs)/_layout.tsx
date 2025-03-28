import { Stack, Tabs } from "expo-router";
import "../globals.css";
import { View } from "react-native";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name={"index"}
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name={"search"}
        options={{ headerShown: false, title: "Search" }}
      />
      <Tabs.Screen
        name={"saved"}
        options={{ headerShown: false, title: "Saved" }}
      />
      <Tabs.Screen
        name={"profile"}
        options={{ headerShown: false, title: "Profile" }}
      />
    </Tabs>
  );
};

export default TabLayout;
