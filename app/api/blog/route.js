import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const loadDB = async () => {
  await connectDB();
};
loadDB();

export async function GET(request) {
  return NextResponse.json({
    msg: "Api Working",
  });
}

export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  const authorImg = formData.get("authorImg");
  const authorImgByteData = await authorImg.arrayBuffer();
  const authorBuffer = Buffer.from(authorImgByteData);
  const authorPath = `./public/${timestamp}_${authorImg.name}`;
  await writeFile(authorPath, authorBuffer);
  const authorImgUrl = `/${timestamp}_${authorImg.name}`;

  const blogData = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    author: formData.get("author"),
    image: imgUrl,
    authorImg: authorImgUrl,
  };
  const blog = await BlogModel.create(blogData);

  return NextResponse.json({
    success: true,
    msg: "Blog Saved",
  });
}
