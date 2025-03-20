import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true, // Content of the reply
  },
  commentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment", // Reference to the comment this reply belongs to
    required: true,
  },
  replyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the user being replied to
  },
}, { timestamps: true });

export default mongoose.model("Reply", replySchema);
