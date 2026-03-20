import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Min 3 characters"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    tag: {
      type: String,
      enum: ["work", "ideas", "personal", "study"],
      default: "personal",
    },
  },
  { timestamps: true }, // adds createdAt + updatedAt
);

module.exports = mongoose.model("Note", noteSchema);
