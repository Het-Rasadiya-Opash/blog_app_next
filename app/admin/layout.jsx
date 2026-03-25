import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <ToastContainer theme="dark" />
      <Sidebar />

      <div className="flex-1 min-h-screen bg-gray-50">
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-300">
          <h3 className="text-xl font-semibold text-gray-800">Admin Panel</h3>
          <Image
            src={assets.profile_icon}
            width={40}
            height={40}
            alt=""
            className="rounded-full"
          />
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
