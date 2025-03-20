import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  likedBy: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "likedByModel", // Dynamic reference to "Student", "Alumni", or "Prof"
    required: true,
  },
  likedByModel: {
    type: String,
    required: true,
    enum: ["Student", "Alumni", "Prof"], // Allowed models
  },
  postID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // Reference to Post model
    required: true,
    }
});

export default mongoose.model("Like", likeSchema);
