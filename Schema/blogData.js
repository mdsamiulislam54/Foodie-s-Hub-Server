import mongoose from "mongoose";

const recipeBlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  content: {
    type: [String], // 6 paragraph array
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorPhoto: {
    type: String, 
    default: "https://i.postimg.cc/x8VW5nbb/banner-2.png"
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const RecipeBlogModel = mongoose.model("RecipeBlog", recipeBlogSchema);
