import mongoose from 'mongoose';
// creating Schema
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
//converting schema to model and export
const category = mongoose.model('Category', categorySchema);
