"use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { createContext, useContext, useState } from "react";

type Status = "all" | "active" | "completed";

interface TodoContextType {
  clearCompletedTodos: () => Promise<void>;
  updateTodo: ReturnType<typeof useMutation<typeof api.todos.updateTodo>>;
  deleteTodo: ReturnType<typeof useMutation<typeof api.todos.deleteTodo>>;
  addTodo: ReturnType<typeof useMutation<typeof api.todos.addTodo>>;
  todos: ReturnType<typeof useQuery<typeof api.todos.getTodos>>;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  status: Status;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("all");
  const updateTodo = useMutation(api.todos.updateTodo);
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
        updateTodo,
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
