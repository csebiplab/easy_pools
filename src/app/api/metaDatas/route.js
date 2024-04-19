import connectMongoDB from "@/libs/db";
import MetaDataModel from "@/models/blog/meta-data.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();

    const createData = await request.json();
    // console.log(createData)


    await MetaDataModel.create({ ...createData });
    return NextResponse.json(
        { message: "Request success", data: createData },
        { status: 201 }
    );
}

export async function GET() {
    await connectMongoDB();

    const data = await MetaDataModel.find({});
    return NextResponse.json(
        {
            message: "Request success",
            data: data
        },
        { status: 200 }
    );
}
