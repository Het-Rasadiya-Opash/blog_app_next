'use client'
import Image from "next/image";
import { assets } from "@/Assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Header = () => {

  const [email,setemail] =useState("");
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    try {
      const formData=new FormData();
      formData.append("email",email);
      const response = await axios.post('/api/email',formData);
      if(response.data.success){
        toast.success(response.data.msg);
        setemail("");
      }else{
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Subscription failed");
    }
  }

  return (
    <div className="w-full px-6 md:px-16 lg:px-24 py-6">

      <div className="flex items-center justify-between">
 <Image src={assets.logo} width={180} height={40} alt="Logo"
          className="cursor-pointer w-[180px] h-auto"/>

        <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
          Get Started
  <Image src={assets.arrow} width={18} height={18} alt="arrow icon"
            className="w-[18px] h-auto"/>
        </button>

      </div>
      <div className="text-center mt-16 max-w-2xl mx-auto">

        <h1 className="text-4xl font-bold mb-4">
          Latest Blogs
        </h1>

        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever.
        </p>
        <form onSubmit={onSubmitHandler} className="flex items-center justify-center gap-3">

          <input onChange={(e)=>setemail(e.target.value)} value={email} 
          type="email" placeholder="Enter your email"
            className="px-4 py-2 w-64 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-black"/>

          <button type="submit" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Subscribe
          </button>

        </form>

      </div>
    </div>
  );
};