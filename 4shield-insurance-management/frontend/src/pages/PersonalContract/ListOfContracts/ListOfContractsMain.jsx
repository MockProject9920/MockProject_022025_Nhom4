import { Button, Typography } from '@mui/material'
import React from 'react'

const ListOfContractsMain = () => {
    return (
        <div>
            <Typography className="mb-4">
                View and manage your insurance policies easily
            </Typography>
            {/* Contract Table */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        {[
                            "Contract Number",
                            "Insurance Type",
                            "Start Date",
                            "End Date",
                            "Status",
                            "Annual Premium",
                            "View Details",
                        ].map((header) => (
                            <th key={header} className="border p-2">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {["HD001", ""].map((contract, index) => (
                        <tr key={index}>
                            <td className="border p-2">{contract}</td>
                            {[...Array(5)].map((_, i) => (
                                <td key={i} className="border p-2"></td>
                            ))}
                            <td className="border p-2">
                                <Button
                                    variant="contained"
                                    size="small"
                                    style={{ backgroundColor: "#FFFF99", color: "black" }}
                                >
                                    View Details
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListOfContractsMain;
