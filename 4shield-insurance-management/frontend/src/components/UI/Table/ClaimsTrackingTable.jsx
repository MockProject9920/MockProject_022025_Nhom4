import { useState } from "react";
import { FaEdit, FaTimes, FaEnvelope } from "react-icons/fa";

const ClaimsTrackingTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [currentClaim, setCurrentClaim] = useState(null);
    const [emailMessage, setEmailMessage] = useState("");

    const claimsSettlement = [
        {
            id: 1,
            claimID: "CLA001",
            claimDate: "2025-01-20",
            settlementDate: "2025-03-01",
            amount: "1,200$",
            status: "In Review",
            method: "Bank Success",
        },
        {
            id: 2,
            claimID: "CLA003",
            claimDate: "2025-01-01",
            settlementDate: "2025-02-01",
            amount: "1,2000$",
            status: "Pending",
            method: "Bank Transfer",
        },
    ];

    const openModal = (type, claim) => {
        setModalType(type);
        setCurrentClaim(claim);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalType(null);
        setCurrentClaim(null);
        setEmailMessage("");
    };

    const handleSendEmail = () => {
        console.log(`Sending email for claim: ${currentClaim?.claimID}, Message: ${emailMessage}`);
        closeModal();
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-6">Claims Settlement Tracking</h2>
            <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="p-4 text-left">#</th>
                            <th className="p-4 text-left">Claim ID</th>
                            <th className="p-4 text-left">Claim Date</th>
                            <th className="p-4 text-left">Settlement Date</th>
                            <th className="p-4 text-left">Amount</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Method</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claimsSettlement.map((claim) => (
                            <tr key={claim.id} className="border-b hover:bg-gray-100">
                                <td className="p-4">{claim.id}</td>
                                <td className="p-4">{claim.claimID}</td>
                                <td className="p-4">{claim.claimDate}</td>
                                <td className="p-4">{claim.settlementDate}</td>
                                <td className="p-4">{claim.amount}</td>
                                <td className="p-4">
                                    <span className={`px-4 py-1 rounded-full text-white text-sm ${claim.status === "In Review" ? "bg-green-500" : "bg-blue-500"}`}>
                                        {claim.status}
                                    </span>
                                </td>
                                <td className="p-4">{claim.method}</td>
                                <td className="p-4 flex gap-4">
                                    <button onClick={() => openModal("edit", claim)} className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition">
                                        <FaEdit />
                                        <span>Edit</span>
                                    </button>
                                    <button onClick={() => openModal("cancel", claim)} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition">
                                        <FaTimes />
                                        <span>Cancel</span>
                                    </button>
                                    <button onClick={() => openModal("email", claim)} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
                                        <FaEnvelope />
                                        <span>Email</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    {/* Modal edit */}
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        {modalType === "edit" && (
                            <>
                                <h2 className="text-2xl font-semibold mb-4">Edit Claim</h2>

                                <label htmlFor="claimDate">Claim Date</label>
                                <input
                                    type="text"
                                    defaultValue={currentClaim?.claimDate}
                                    className="w-full p-2 mb-4 border rounded"
                                    id="claimDate"
                                />

                                <label htmlFor="settlementDate">Settlement Date</label>
                                <input
                                    type="text"
                                    defaultValue={currentClaim?.settlementDate}
                                    className="w-full p-2 mb-4 border rounded"
                                    id="settlementDate"
                                />

                                <label htmlFor="amount">Amount</label>
                                <input
                                    type="text"
                                    defaultValue={currentClaim?.amount}
                                    className="w-full p-2 mb-4 border rounded"
                                    id="amount"
                                />

                                <label htmlFor="status">Status</label>
                                <input
                                    type="text"
                                    defaultValue={currentClaim?.status}
                                    className="w-full p-2 mb-4 border rounded"
                                    id="status"
                                />

                                <div className="flex justify-end gap-4">
                                    <button onClick={closeModal} className="px-4 py-2 bg-red-400 text-white rounded">Cancel</button>
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
                                </div>
                            </>
                        )}  {modalType === "cancel" && (
                            <>{/* Modal cancel */}
                                <h2 className="text-2xl font-semibold mb-4">Cancel Claim</h2>
                                <p className="mb-4">Are you sure you want to cancel this claim?</p>
                                <div className="flex justify-end gap-4">
                                    <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded">No</button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded">Yes, Cancel</button>
                                </div>
                            </>
                            
                        )}  {modalType === "email" && (
                            <>{/* Modal email */}
                                <h2 className="text-2xl font-semibold mb-4">Send Email</h2>
                                <textarea
                                    className="w-full p-2 mb-4 border rounded"
                                    rows="4"
                                    placeholder="Write your message here..."
                                    value={emailMessage}
                                    onChange={(e) => setEmailMessage(e.target.value)}
                                ></textarea>
                                <div className="flex gap-2">
                                    <button onClick={handleSendEmail} className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
                                    <button onClick={closeModal} className="px-4 py-2 bg-red-500 text-white rounded">Close</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClaimsTrackingTable;