'use client'

import BlogTabelItem from "@/components/AdminComponents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {

    const [blogs, setblogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');
        setblogs(response.data.blogs);
    }

    const deleteBlog = async (mongoId) => {
        const response = await axios.delete('/api/blog', {
            params: {
                id: mongoId
            }
        });
        toast.success(response.data.msg);
        fetchBlogs();
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className="p-6 w-full">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">All Blogs</h1>

            <div className="overflow-x-auto rounded-lg shadow border scrollbar-hide">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
                        <tr>
                        <th className="px-4 py-3 text-left">Author Name</th>
                        <th className="px-4 py-3 text-left">Blog Title</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
 {blogs.map((item, index) => {return (
        <BlogTabelItem key={index} mongoId={item._id} title={item.title}
        author={item.author} authorImg={item.authorImg} date={item.date}
        deleteBlog={deleteBlog}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page;