import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    status: v.string(),
    todo: v.string(),
  }),
});
