import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, View } from "react-native";
import Radio from "../ui/Radio";

function Todo() {
  return (
    <View className="px-6 py-5 flex flex-row justify-start items-center gap-6">
      <Radio />

      <View className="flex-1 border-2 flex flex-row justify-between items-center gap-2">
        <Text className="flex-1">todo</Text>

        <Pressable>
          <MaterialIcons name="close" size={24} className="text-foreground" />
        </Pressable>
      </View>
    </View>
  );
}

export default Todo;
