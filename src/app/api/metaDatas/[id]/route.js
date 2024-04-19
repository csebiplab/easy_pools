import connectMongoDB from "@/libs/db";
import MetaDataModel from "@/models/blog/meta-data.model";
import { NextResponse } from "next/server";

import connectMongoDB from "@/libs/db";
import MetaDataModel from "@/models/blog/meta-data.model";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  await connectMongoDB();

  const { id } = params;

  const updateData = await request.json();

  const data = await MetaDataModel.findByIdAndUpdate(id, { ...updateData }, { new: true }).exec();

  if (!data) {
    return NextResponse.json({ message: "Data not found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}


export async function GET(request, { params }) {
  await connectMongoDB();
  const { id } = params;

  const data = await MetaDataModel.findOne({ _id: id });

  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}
