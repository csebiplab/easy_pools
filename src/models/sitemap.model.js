import mongoose, { Schema } from "mongoose";

const sitemapSchema = new Schema(
    {
        changefreq: {
            type: String,
            enum: ["yearly", "monthly", "weekly"],
            required: true
        },
        loc: {
            type: String,
            required: true
        },
        priority: {
            type: Number,
            required: true,
            min: 0,
            max: 1
        }
    },
    {
        timestamps: true,
    }
);

const Sitemap = mongoose.models.Sitemap || mongoose.model("Sitemap", sitemapSchema);
export default Sitemap;
