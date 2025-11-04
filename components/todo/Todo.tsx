import { useTheme } from "@/contexts/theme-context";
import { useTodo } from "@/contexts/todo-context";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text, View } from "react-native";
import Radio from "../ui/Radio";

function Todo({
  todo,
  status,
  id,
}: {
  todo: string;
  status: string;
  id: string;
}) {
  const { updateStatus, deleteTodo } = useTodo();
  const { theme } = useTheme();

  return (
    <View className="px-6 group border-border border-b py-5 flex flex-row justify-start items-center gap-6">
      <Radio
        onPress={() =>
          updateStatus({
            id: id as Id<"todos">,
            status: status === "active" ? "completed" : "active",
          })
        }
        className={cn(status === "completed" && "bg-radio")}
      />

      <View className="flex-1 flex flex-row justify-between items-center gap-2">
        <Text
          className={cn(
            "text-foreground text-xs md:text-lg tracking-[-0.17px] md:tracking-[-0.25px] flex-1",
            status === "completed" && "text-muted-foreground line-through"
          )}
        >
          {todo}
        </Text>

        <Pressable
          className="hidden group-hover:inline-block"
          onPress={() => deleteTodo({ id: id as Id<"todos"> })}
        >
          <MaterialIcons
            name="close"
            size={24}
            className={cn(
              theme === "dark" ? "text-[#5B5E7E]" : "text-[#979797]"
            )}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Todo;
