import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date, // Date on which the achievement occurred
      required: true,
    },
    awardedTo: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "awardedToModel", // Dynamic reference to "Student", "Alumni", or "Prof"
      required: true,
    },
awardedToModel: {
      type: String,
      required: true,
      enum: ["Student", "Alumni", "Prof"], // Allowed models
    },
    initiative: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Initiative", // Belongs to which initiative (e.g., WebCSE, CSAI)
    },
    image_url: {
      type: String, // Cloudinary URL for the main achievement image
    },
    tags: [String], // For category
    gallery: [String], // Array of URLs for additional pics
    socialMediaLinks: [
      {
        platform: String,
        url: String,
      },
    ],
    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prof", // Reference to the user who created the entry
    },
  },
  { timestamps: true }
);

export default mongoose.model("Achievement", achievementSchema);
