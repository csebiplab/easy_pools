import connectMongoDB from "@/libs/db";
import RobotTxt from "@/models/robot.model";
import { NextResponse } from "next/server";


export async function PATCH(request, { params }) {
    const { id } = params;


    const payload = await request.json();

    await connectMongoDB();

    const data = await RobotTxt.findByIdAndUpdate(id, { ...payload })

    return NextResponse.json(
        {
            status: 200,
            message: "Request success",
            data: data
        },
        { status: 200 }
    );

}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();


    const data = await RobotTxt.findOne({ _id: id });
    return NextResponse.json(
        {
            status: 200,
            message: "Request success",
            data: data
        },
        { status: 200 }
    );

}

export async function DELETE(request, { params }) {
    const { id } = params;

    await connectMongoDB();


    const data = await RobotTxt.findByIdAndDelete(id);
    return NextResponse.json(
        {
            status: 200,
            message: "Request success",
            data: data
        },
        { status: 200 }
    );

}