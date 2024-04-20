import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(

    {
        blogTitle: String,
        metaTitle: String,
        customLink: String,
        metaDescription: String,
        metaKeywords: String,
        shortDescription: String,
        content: String
    },
    {
        timestamps: true,
    }
);

const Blog =
    mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
