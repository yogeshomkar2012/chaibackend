import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const addressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: "User",
  },
  city: {
    type: String,
    required: true,
  },
  pinNo: {
    type: Number,
    required: true,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: [addressSchema],
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELEVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
export const order = mongoose.model("Order", orderSchema);
