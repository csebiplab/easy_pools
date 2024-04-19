import mongoose, { Schema, models } from "mongoose";

const blogSchema = new Schema({
    title: String,
    author: String,
}, {
    timestamps: true,
});

const Blog = models.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
