import mongoose, { Schema } from "mongoose";

const sitemapSchema = new Schema(
    {
        changefreq: String,
        loc: String,
        priority: Number,
    },
    {
        timestamps: true,
    }
);

const Sitemap =
    mongoose.models.Sitemap || mongoose.model("Sitemap", sitemapSchema);
export default Sitemap;