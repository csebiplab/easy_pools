import connectMongoDB from "@/libs/db";
import Blog from "@/models/blog/blog.model";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { ...createData } = await request.json();
    await connectMongoDB();

    // console.log(createData)

    await Blog.create({ createData });
    return NextResponse.json(
        { message: "Request success", data: createData },
        { status: 201 }
    );
}

export async function GET() {
    await connectMongoDB();

    const blogs = await Blog.find({});
    return NextResponse.json(
        {
            message: "Request success",
            data: blogs
        },
        { status: 201 }
    );
}
