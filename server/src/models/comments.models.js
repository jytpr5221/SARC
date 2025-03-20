import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentedBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "commentedByModel", // Dynamic reference to "Student", "Alumni", or "Prof"
    required: true,
  },
  commentedByModel: {
    type: String,
    required: true,
    enum: ["Student", "Alumni", "Prof"], // Allowed models
  },
  reference: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "referenceModel", // Dynamic reference to "Post", "Event", or "Initiative"
    required: true,
  },
  referenceModel: {
    type: String,
    required: true,
    enum: ["Post", "Event", "Initiative"], // Allowed models
  },
  content: {
    type: String,
    required: true,
  },
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment", // Reference to itself for nested replies
    },
  ],
});

export default mongoose.model("Comment", commentSchema);

