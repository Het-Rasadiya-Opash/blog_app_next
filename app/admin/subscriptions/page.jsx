"use client";
import SubTableItem from "@/components/AdminComponents/SubtableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [emails, setemails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get("/api/email");
      setemails(response.data.emails);
    } catch (error) {
      toast.error("Failed to fetch emails");
    }
  };

  const deleteEmail = async (mongoId) => {
    try {
      const response = await axios.delete("/api/email", {
        params: { id: mongoId },
      });
      if (response.data.success) {
        toast.success(response.data.msg);
        fetchEmails();
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Failed to delete email");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        All Subscription
      </h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-3">Email Subscription</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => (
              <SubTableItem
                key={index}
                mongoId={item._id}
                deleteEmail={deleteEmail}
                email={item.email}
                date={item.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
