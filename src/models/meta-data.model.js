import mongoose, { Schema, models } from "mongoose";

const metaDataSchema = new Schema(
    {
        pageName: { type: String },
        title: { type: String },
        description: { type: String },
        keywords: { type: String },
        pageLink: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const MetaDataModel = models.MetaDataModel || mongoose.model("MetaDataModel", metaDataSchema);

export default MetaDataModel;
