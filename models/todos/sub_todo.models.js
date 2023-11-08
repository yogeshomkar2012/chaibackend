import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complet: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Type.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model("SubTodo", subTodoSchema);
