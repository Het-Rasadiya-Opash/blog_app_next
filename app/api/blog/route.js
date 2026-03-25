import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";

const loadDB = async () => {
  await connectDB();
};
loadDB();

// API Endpoint to get all blogs
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({
      blogs,
    });
  }
}

// API Endpoint for Uploading blog
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
  let authorImgUrl;
  if (authorImg instanceof File) {
    const authorImgByteData = await authorImg.arrayBuffer();
    const authorBuffer = Buffer.from(authorImgByteData);
    const authorPath = `./public/${timestamp}_${authorImg.name}`;
    await writeFile(authorPath, authorBuffer);
    authorImgUrl = `/${timestamp}_${authorImg.name}`;
  } else {
    authorImgUrl = authorImg;
  }

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
