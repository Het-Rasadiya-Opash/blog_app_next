import React from 'react';

const SubTableItem = ({ email, mongoId, deleteEmail, date }) => {
    const emailDate = new Date(date);

    return (
        <tr className="border-b hover:bg-gray-50 transition">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                {email ? email : "No Email"}
            </th>
            <td className="px-6 py-4 text-gray-600">
                {emailDate.toDateString()}</td>
            <td className="px-6 py-4 text-center">
                <button onClick={() => deleteEmail(mongoId)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default SubTableItem;