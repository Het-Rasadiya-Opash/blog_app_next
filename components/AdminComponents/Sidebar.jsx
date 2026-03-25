import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 border-r border-gray-300 h-screen w-72 shrink-0">
      <div className="px-6 py-4 border-b border-gray-300">
        <Image src={assets.logo} alt="Logo" width={120} height={40} />
      </div>

      <div className="flex flex-col gap-4 py-10 px-6">
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-3 font-medium px-4 py-3 bg-white border border-black shadow-[-5px_5px_0px_#000000] hover:bg-slate-50 transition-all"
          >
            <Image src={assets.add_icon} alt="icon" width={28} height={28} />
            <p>Add Blogs</p>
          </Link>

          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 font-medium px-4 py-3 bg-white border border-black shadow-[-5px_5px_0px_#000000] hover:bg-slate-50 transition-all"
          >
            <Image src={assets.blog_icon} alt="icon" width={28} height={28} />
            <p>Blog Lists</p>
          </Link>

          <Link href='/admin/subscriptions' className="flex items-center gap-3 font-medium px-4 py-3 bg-white border border-black shadow-[-5px_5px_0px_#000000] hover:bg-slate-50 transition-all">
            <Image src={assets.email_icon} alt="icon" width={28} height={28} />
            <p>Subscriptions</p>
          </Link>
      </div>
    </div>
  );
};

export default Sidebar;
