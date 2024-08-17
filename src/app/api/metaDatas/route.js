import connectMongoDB from "@/libs/db";
import MetaDataModel from "@/models/meta-data.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();

    const createData = await request.json();
    // console.log(createData)

    const { pageName, title, description, keywords } = createData ?? {};

    // Validate input data
    if (!pageName || !title || !description || !keywords) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }


    await MetaDataModel.create({ ...createData });
    return NextResponse.json(
        { message: "Request success", data: createData },
        { status: 201 }
    );
}

export async function GET(request) {
    await connectMongoDB();

    const searchParams = request.nextUrl.searchParams;
    const pageName = searchParams.get('pageName');

    const query = {}

    if (pageName) {
        query['pageName'] = pageName
    }

    const data = await MetaDataModel.find(query).select('_id pageName title description keywords')
    return NextResponse.json(
        {
            message: "Request success",
            data: data
        },
        { status: 200 }
    );
}

export async function DELETE(request) {
    await connectMongoDB();

    const id = request.nextUrl.searchParams.get("id");

    await MetaDataModel.findByIdAndDelete(id);

    return NextResponse.json(
        { message: "Request success" },
        { status: 200 }
    );
}
