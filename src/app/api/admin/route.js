import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "@/libs/db";
import AdminModel from "@/models/admin.model";


/*
// Temp api to create one time admin profile
export async function POST(request) {
    try {
        const { username, password } = await request.json();

        await connectMongoDB();

        const existingAdmin = await AdminModel.findOne({ username });
        if (existingAdmin) {
            return NextResponse.json(
                { error: "Admin with this username already exists" },
                { status: 400 }
            );
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await AdminModel.create({ username, password: hashedPassword });

        return NextResponse.json(
            { message: "Request Success", data: { username: username } },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating admin:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
*/

export async function PATCH(request) {
    await connectMongoDB();

    // Start Mongoose session
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const updateField = await request.json();

        const { currentUserName, newUserName, currentPassword, newPassword } = updateField ?? {}

        if (!currentUserName) {
            return NextResponse.json(
                { error: "Please provide current user name" },
                { status: 401 }
            );
        }

        if (!currentPassword) {
            return NextResponse.json(
                { error: "Please provide current password" },
                { status: 401 }
            );
        }


        const admin = await AdminModel.findOne({ username: currentUserName }).session(session);

        if (!admin) {
            return NextResponse.json(
                { error: "Invalid username" },
                { status: 401 }
            );
        }

        const passwordMatch = await bcrypt.compare(currentPassword, admin.password);

        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 401 }
            );
        }

        if (newUserName) {
            admin.username = newUserName;
        }

        if (newPassword) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
            admin.password = hashedPassword;
        }

        // Save the updated admin
        await admin.save();

        // Commit the transaction
        await session.commitTransaction();

        return NextResponse.json(
            { message: "Request Success", admin: { userName: newUserName || currentUserName } },
            { status: 200 }
        );
    } catch (error) {
        // Abort transaction if an error occurs
        await session.abortTransaction();

        console.error("Error during update profile:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    } finally {
        // End the session
        session.endSession();
    }
}