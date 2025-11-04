import { Text, View } from "react-native";
import { ThemeToggle } from "./theme-toggle";

function Header() {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="text-4xl font-bold tracking-[15px] text-white">
        Todo
      </Text>

      <ThemeToggle />
    </View>
  );
}

export default Header;
