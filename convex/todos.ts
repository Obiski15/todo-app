import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
  args: { status: v.optional(v.string()) },
  handler: async ({ db }, { status }) => {
    let query = db.query("todos");

    if (status && status !== "all") {
      query = query.filter((q) => q.eq(q.field("status"), status));
    }

    return await query.order("desc").collect();
  },
});

export const addTodo = mutation({
  args: { todo: v.string(), status: v.optional(v.string()) },
  handler: async ({ db }, { todo, status }) =>
    await db.insert("todos", {
      todo,
      status: status !== "completed" ? "active" : status,
    }),
});

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => await db.delete(id),
});

export const updateTodo = mutation({
  args: {
    id: v.id("todos"),
    status: v.optional(v.string()),
    todo: v.optional(v.string()),
  },
  handler: async ({ db }, { id, status, todo }) => {
    let values: Record<string, string> = {};

    if (!status && !todo) {
      throw new Error(
        "Update requires at least one of status or todo to be provided"
      );
    }

    if (status) values["status"] = status;
    if (todo) values["todo"] = todo;

    return await db.patch(id, values);
  },
});

export const clearTodos = mutation({
  args: { status: v.string() },
  handler: async ({ db }, { status }) => {
    const todosToDelete = db
      .query("todos")
      .filter((q) => q.eq(q.field("status"), status));

    for await (const todo of todosToDelete) {
      await db.delete(todo._id);
    }
  },
});
