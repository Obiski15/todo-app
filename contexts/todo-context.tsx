"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { createContext, useContext, useState } from "react";

type Status = "all" | "active" | "completed";

interface TodoContextType {
  clearCompletedTodos: () => Promise<void>;
  todos: ReturnType<typeof useQuery<typeof api.todos.getTodos>>;
  updateStatus: ReturnType<
    typeof useMutation<typeof api.todos.updateTodoStatus>
  >;
  addTodo: ReturnType<typeof useMutation<typeof api.todos.addTodo>>;
  deleteTodo: ReturnType<typeof useMutation<typeof api.todos.deleteTodo>>;
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("all");
  const updateStatus = useMutation(api.todos.updateTodoStatus);
  const todos = useQuery(api.todos.getTodos, { status });
  const clearTodos = useMutation(api.todos.clearTodos);
  const deleteTodo = useMutation(api.todos.deleteTodo);
  const addTodo = useMutation(api.todos.addTodo);

  const clearCompletedTodos = async () => {
    await clearTodos({ status: "completed" });
  };

  return (
    <TodoContext.Provider
      value={{
        clearCompletedTodos,
        todos,
        addTodo,
        updateStatus,
        deleteTodo,
        setStatus,
        status,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
};

export default TodoProvider;
