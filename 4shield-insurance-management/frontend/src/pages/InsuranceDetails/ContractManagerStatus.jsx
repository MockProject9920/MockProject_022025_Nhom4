import React, { useState } from 'react'

export const ContractManagerStatus = () => {
    const [status, setStatus] = useState("Draft");
    const statusOptions = [
        { id: 1, name: 'Draft' },
        { id: 2, name: 'Under review' },
        { id: 3, name: 'Pending Approval' },
        { id: 4, name: 'Approved' },
        { id: 5, name: 'Signed' },
        { id: 6, name: 'Active' },
    ];
    return (
        <>
            <div className="w-48 border-l pl-6">
                <h3 className="font-bold mb-4">Status</h3>
                <div className="space-y-4">
                    {statusOptions.map((option) => (
                        <div
                            key={option.id}
                            className="cursor-pointer"
                            onClick={() => setStatus(option.name)}
                        >
                            <span className={status === option.name ? "inline-block py-1 px-3 bg-yellow-400 text-white font-medium rounded-full" : ""}>{option.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

