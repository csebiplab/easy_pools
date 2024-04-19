import mongoose, { Schema, models } from "mongoose";


const metaDataSchema = new Schema(
    {
        pageName: String,
        title: String,
        description: String,
        keywords: String,
    },
    {
        timestamps: true,
    }
);

const MetaDataModel =
    models.MetaDataModel ||
    mongoose.model("MetaDataModel", metaDataSchema);


export default MetaDataModel;
