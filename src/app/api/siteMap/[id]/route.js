import connectMongoDB from "@/libs/db";
import Sitemap from "@/models/sitemap.model";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  const { id } = params;
  const updatedFields = await request.json();

  await connectMongoDB();

  const data = await Sitemap.findByIdAndUpdate(id, {
    ...updatedFields
  });

  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;

  await connectMongoDB();

  const data = await Sitemap.findOne({ _id: id });

  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}
