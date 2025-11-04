import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ThemeProvider, useTheme } from "@/contexts/theme-context";
import TodoProvider from "@/contexts/todo-context";
import "./global.css";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: "(tabs)",
};

function RootNavigator() {
  const { colorScheme } = useTheme();

  return (
    <NavigationThemeProvider
      value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Stack screenOptions={{ headerShown: false }} />
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
  });
  return (
    <ThemeProvider>
      <ConvexProvider client={convex}>
        <TodoProvider>
          <RootNavigator />
        </TodoProvider>
      </ConvexProvider>
    </ThemeProvider>
  );
}
