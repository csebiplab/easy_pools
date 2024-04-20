import connectMongoDB from "@/libs/db";
import RobotTxt from "@/models/robot.model";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDB();

  const data = await RobotTxt.find();
  return NextResponse.json(
    {
      message: "Request success",
      data: data
    },
    { status: 200 }
  );
}
