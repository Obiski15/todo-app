import { TextInput, View } from "react-native";
import Radio from "../ui/Radio";

function CreateTodo() {
  return (
    <View className="bg-card flex flex-row justify-start items-center gap-6 text-input px-6 py-5 rounded-[5px]">
      <Radio />
      <TextInput
        placeholder="Create a new todo"
        className="border-none outline-none focus-visible:outline-none"
      />
    </View>
  );
}

export default CreateTodo;
