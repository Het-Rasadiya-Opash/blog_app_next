
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTabelItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const BlogDate = new Date(date);

    return (
        <tr className="border-b hover:bg-gray-50 transition duration-200">
            <th scope="row" className="px-4 py-3">
                <div className="flex items-center gap-3">
        <Image width={40} height={40} src={authorImg && authorImg !== "null" ? authorImg : assets.profile_icon}
        className="rounded-full object-cover border" alt="author"/>
        <p className="text-sm font-medium text-gray-700">
                        {author ? author : "No author"}
                    </p>
                </div>
            </th>

            <td className="px-4 py-3 text-sm text-gray-800 font-medium max-w-xs truncate">
                {title ? title : "no title"}
            </td>

            <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                {BlogDate.toDateString()}
            </td>

            <td className="px-4 py-3 text-center">
                <button onClick={() => deleteBlog(mongoId)} className="px-3 py-1 text-sm font-semibold text-red-500 border border-red-200 rounded hover:bg-red-50 hover:text-red-600 transition">
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default BlogTabelItem;