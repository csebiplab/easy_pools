import mongoose, { Schema, models } from "mongoose";

const adminSchema = new Schema(
    {
        username: String,
        password: String,
    },
    {
        timestamps: true,
    }
);

// Check if the Admin model already exists before defining it
const AdminModel = models.Admin || mongoose.model("Admin", adminSchema);

export default AdminModel;
