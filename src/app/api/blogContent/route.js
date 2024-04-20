import { NextResponse } from "next/server";
import convertToLink from "@/helpers/trimSpace";
import connectMongoDB from "@/libs/db";
import Blog from "@/models/blog.model";

export async function POST(request) {
  try {
    const { blogTitle, metaTitle, customLink, metaDescription, metaKeywords, shortDescription, content } = await request.json();
    const convertLink = convertToLink(customLink)

    await connectMongoDB();


    const data = await Blog.create({
      blogTitle,
      metaTitle,
      customLink: convertLink,
      metaDescription,
      metaKeywords,
      shortDescription,
      content
    });

    return NextResponse.json(
      { message: "Request success", data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const sortFields = ['updatedAt', -1]
  const data = await Blog.find().sort([sortFields]);

  return NextResponse.json(
    { message: "Request success", data },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  await Blog.findByIdAndDelete(id);

  return NextResponse.json(
    { message: "Request success" },
    { status: 200 }
  );
}
