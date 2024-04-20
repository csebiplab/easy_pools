import mongoose, { Schema } from "mongoose";

const sitemapSchema = new Schema(
    {
        title: String,
        url: String,
    },
    {
        timestamps: true,
    }
);

const Sitemap =
    mongoose.models.Sitemap || mongoose.model("Sitemap", sitemapSchema);
export default Sitemap;
