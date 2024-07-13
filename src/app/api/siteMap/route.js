import connectMongoDB from "@/libs/db";
import Sitemap from "@/models/sitemap.model";
import { NextResponse } from "next/server";



export async function POST(request) {
  const { changefreq, loc, priority } = await request.json();
  await connectMongoDB();

  const data = await Sitemap.create({ changefreq, loc, priority });

  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const data = await Sitemap.find();
  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectMongoDB();

  await Sitemap.findByIdAndDelete(id);

  return NextResponse.json(
    {
      message: "Request success",
    },
    { status: 200 }
  );
}
