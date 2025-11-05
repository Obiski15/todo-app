import { useTodo } from "@/contexts/todo-context";
import { cn } from "@/lib/utils";
import { Pressable, Text, View } from "react-native";
import Todo from "./Todo";

function Actions() {
  const { setStatus, status } = useTodo();

  return (
    <View className="w-fit  capitalize mx-auto gap-5 flex justify-between items-center flex-row">
      <Pressable onPress={() => setStatus("all")}>
        <Text
          className={cn(
            "font-bold text-sm tracking-[-0.19px] text-secondary",
            status === "all" ? "text-link" : "hover:text-link-active"
          )}
        >
          All
        </Text>
      </Pressable>

      <Pressable onPress={() => setStatus("active")}>
        <Text
          className={cn(
            "font-bold text-sm tracking-[-0.19px] text-secondary",
            status === "active" ? "text-link" : "hover:text-link-active"
          )}
        >
          active
        </Text>
      </Pressable>

      <Pressable onPress={() => setStatus("completed")}>
        <Text
          className={cn(
            "font-bold text-sm tracking-[-0.19px] text-secondary",
            status === "completed" ? "text-link" : "hover:text-link-active"
          )}
        >
          completed
        </Text>
      </Pressable>
    </View>
  );
}

function Todos() {
  const { todos, clearCompletedTodos } = useTodo();

  if (!todos)
    return (
      <View className="p-10 bg-card rounded-[5px]">
        <Text className="text-foreground">Loading...</Text>
      </View>
    );

  return (
    <View className="gap-4 md:gap-6">
      <View className="bg-card rounded-[5px]">
        {!todos.length ? (
          <View className="p-10">
            <Text className="text-foreground">No todos found</Text>
          </View>
        ) : (
          todos.map((todo, index) => (
            <Todo
              key={todo._id}
              todo={todo.todo}
              id={todo._id}
              status={todo.status}
              index={index}
            />
          ))
        )}

        <View className="flex flex-row pt-4 pb-5 px-6 justify-between items-center">
          <Text className="text-secondary font-normal text-xs tracking-[-0.17px]">
            {todos.filter((todo) => todo.status === "active").length} items left
          </Text>
          <View className="hidden md:block">
            <Actions />
          </View>

          <Pressable onPress={clearCompletedTodos}>
            <Text className="text-secondary hover:text-secondary-active font-normal text-xs tracking-[-0.17px]">
              Clear Completed
            </Text>
          </Pressable>
        </View>
      </View>

      <View className="rounded-[5px] bg-card p-4 shadow-sm md:hidden">
        <Actions />
      </View>
    </View>
  );
}

export default Todos;
