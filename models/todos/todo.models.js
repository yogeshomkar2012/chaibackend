import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: ture,
      lowercase: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjecId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const todo = mongoose.model("Todo", todoSchema);
