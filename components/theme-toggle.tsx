import { useTheme } from "@/contexts/theme-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = () => {
    return (
      <MaterialIcons
        name={theme === "light" ? "dark-mode" : "light-mode"}
        size={24}
        color="white"
      />
    );
  };

  return <Pressable onPress={toggleTheme}>{themeIcon()}</Pressable>;
}
