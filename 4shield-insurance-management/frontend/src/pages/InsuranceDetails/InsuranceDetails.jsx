import { AppBar, Toolbar, Typography, Box, Avatar, Container, Grid } from "@mui/material";
import React from 'react'
import Sidebar from "./SideBar";
import { ContractManagerHeader } from "./ContractManagerHeader";
import { ContractProcess } from "./ContractProcess";
import { InsuranceDetailsForm } from "./InsuranceDetailsForm";
import { ContractManagerStatus } from "./ContractManagerStatus";
import { useNavigate } from "react-router-dom";

const steps = [
    { id: 1, name: "General Options", path: "/contract-manager/create-customer" },
    { id: 2, name: "Customer Information", path: "/inforcus" },
    { id: 3, name: "Property Information", path: "/property-information" },
    { id: 4, name: "Insurance Details", path: "/insurance-details" },
    { id: 5, name: "Contract Status", path: "/contract-status" },
    { id: 6, name: "Contract Terms", path: "/contract-terms" },
];

export const InsuranceDetails = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box>
                <ContractManagerHeader />
                <Container>
                    <Typography variant="h6" sx={{ flexGrow: 1, marginTop: "8px" }}>
                        Contract Manager &gt; Create New Contract
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        {/* Quy trình tạo hợp đồng */}
                        <Grid item xs={12}>
                            {/* Steps Navigation */}
                            <div className="flex justify-between mb-6">
                                {steps.map((step) => (
                                    <div
                                        key={step.id}
                                        className="flex flex-col items-center cursor-pointer"
                                        onClick={() => navigate(step.path)}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.path === window.location.pathname ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                                            {step.id}
                                        </div>
                                        <span className="text-xs mt-2 text-center">{step.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Grid>

                        {/* Chi tiết bảo hiểm */}
                        <Grid item xs={8}>
                            <InsuranceDetailsForm />
                            {/* Action Buttons */}
                            <div className="flex justify-between mt-6 p-6">
                                <button onClick={() => navigate("/property-information")} className="bg-blue-500 text-white px-4 py-2 rounded-md">Previous Page</button>
                                <button onClick={() => navigate("/contract-status")} className="bg-green-600 text-white px-4 py-2 rounded-md">Next Page</button>
                            </div>
                        </Grid>

                        {/* Trạng thái hợp đồng */}
                        <Grid item xs={4}>
                            <ContractManagerStatus />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}