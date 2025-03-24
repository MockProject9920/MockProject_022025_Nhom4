import React from "react";

const InvoiceManagement = () => {
    return (
        <div className="p-4 max-w-5xl mx-auto bg-gray-100 min-h-screen">
            <h1 className="text-xl font-semibold text-gray-400 mb-4 text-center md:text-left">
                Payment & Invoice Management Screen
            </h1>
            <div className="bg-white shadow-lg rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2">
                    <div className="text-blue-900 font-bold text-lg text-center md:text-left mb-2 md:mb-0">
                        FOUR SHIELD INSURANCE
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border px-2 py-1 rounded-md w-full md:w-auto"
                    />
                    <div className="text-blue-600 font-semibold mt-2 md:mt-0">
                        <a href="#" className="mr-4">Admin</a>
                        <a href="#">Home</a>
                    </div>
                </div>

                <div className="mt-4 text-center md:text-left">
                    <h2 className="text-blue-700 font-bold text-lg">Payment & Invoice</h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">
                        + Add Invoice
                    </button>
                </div>

                <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse border mt-2 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-2 md:px-4 py-2">#</th>
                                <th className="border px-2 md:px-4 py-2">Customer Name</th>
                                <th className="border px-2 md:px-4 py-2">ContractID</th>
                                <th className="border px-2 md:px-4 py-2">Amount</th>
                                <th className="border px-2 md:px-4 py-2">Payment Date</th>
                                <th className="border px-2 md:px-4 py-2">Payment Status</th>
                                <th className="border px-2 md:px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[{ id: 1, name: "Thomas", contract: "ID01", amount: "5000$", date: "Feb 3, 2025", status: "Paid" }, { id: 2, name: "Sophia", contract: "ID02", amount: "5000$", date: "Feb 3, 2025", status: "Unpaid" }].map((item) => (
                                <tr key={item.id} className="text-center">
                                    <td className="border px-2 md:px-4 text-nowrap py-2">{item.id}</td>
                                    <td className="border px-2 md:px-4 text-nowrap py-2">{item.name}</td>
                                    <td className="border px-2 md:px-4 text-nowrap py-2">{item.contract}</td>
                                    <td className="border px-2 md:px-4 py-2">{item.amount}</td>
                                    <td className="border px-2 md:px-4 text-nowrap py-2">{item.date}</td>
                                    <td className={`border px-2 md:px-4 py-2 ${item.status === "Paid" ? "text-green-600" : "text-red-600"}`}>{item.status}</td>
                                    <td className="border px-2 md:px-4 py-2 flex flex-col md:flex-row justify-center gap-2 text-nowrap">
                                        <button className="bg-green-500 text-white px-2 py-[14px] rounded text-sm">View detail</button>
                                        <button className="bg-yellow-400 text-black px-2 py-[14px] rounded text-sm">Edit Invoice</button>
                                        <button className="bg-gray-500 text-white px-2 py-[14px] rounded text-sm">Send payment reminder</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-center text-gray-600">
                    &lt;&lt; <a href="#" className="text-blue-600">1</a> 2 3 ... 49 50 &gt;&gt;
                </div>
            </div>
        </div>
    );
};

export default InvoiceManagement;