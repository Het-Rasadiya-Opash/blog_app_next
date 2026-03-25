import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("get ");
  return NextResponse.json({
    msg: "Api Working",
  });
}
