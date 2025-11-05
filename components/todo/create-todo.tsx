import { useTodo } from "@/contexts/todo-context";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TextInput, View } from "react-native";
import Radio from "../ui/Radio";

function CreateTodo() {
  const [status, setStatus] = useState<"active" | "completed">("active");
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  async function handleSubmit() {
    if (!todo.trim()) return;

    await addTodo({ status, todo: todo.trim() });
    setTodo("");
  }

  return (
    <View className="bg-card flex flex-row justify-start items-center gap-6 text-input px-6 py-5 rounded-[5px]">
      <Radio
        className={cn(status === "completed" && "bg-radio")}
        onPress={() => {
          setStatus((s) => (s === "active" ? "completed" : "active"));
        }}
      />
      <TextInput
        placeholder="Create a new todo"
        className="border-none flex-1 text-input outline-none focus-visible:outline-none"
        onSubmitEditing={handleSubmit}
        returnKeyType="done"
        value={todo}
        onChangeText={setTodo}
      />
    </View>
  );
}

export default CreateTodo;
