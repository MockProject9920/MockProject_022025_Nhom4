import { Button, Tab, Tabs, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

export default function PersonalContract() {
    const [tabValue, setTabValue] = useState(0);
    const [contractFilter, setContractFilter] = useState("");
    const [insuranceType, setInsuranceType] = useState("");

    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex-1">
                {/* Header */}
                <Header />

                {/* Breadcrumb */}
                <div className="p-4">
                    <Typography variant="h6">
                        <b>Personal Contract</b> &gt; {tabValue === 0 ? "List of Contracts" : "Contract Details"}
                    </Typography>

                    {/* Tabs */}
                    <Tabs value={tabValue} onChange={handleTabChange} className="mb-4">
                        <Tab label="List of Contracts" />
                        <Tab label="Contract Details" />
                    </Tabs>

                    {tabValue === 0 ? (
                        <>
                            <Typography className="mb-4">View and manage your insurance policies easily</Typography>

                            {/* Filters */}
                            <Typography variant="h6" className="mb-2 font-bold">List of Contracts</Typography>
                            <div className="flex items-center gap-8 mb-6">
                                <div className="flex flex-col gap-4 w-[460px]">
                                    <FormControl variant="outlined" size="small">
                                        <InputLabel>Contract Filter</InputLabel>
                                        <Select
                                            value={contractFilter}
                                            onChange={(e) => setContractFilter(e.target.value)}
                                            label="Contract Filter"
                                        >
                                            {["Active", "Expiring", "Expired", "Canceled"].map((status) => (
                                                <MenuItem key={status} value={status}>{status}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl variant="outlined" size="small">
                                        <InputLabel>Insurance Type</InputLabel>
                                        <Select
                                            value={insuranceType}
                                            onChange={(e) => setInsuranceType(e.target.value)}
                                            label="Insurance Type"
                                        >
                                            {["Health", "Auto", "Home", "Life"].map((type) => (
                                                <MenuItem key={type} value={type}>{type}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>

                                <Typography>Status: Active / Expiring / Expired / Canceled</Typography>
                            </div>

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
                        </>
                    ) : (
                        <div>
                            <Typography>Contract Details (Displayed when selecting a contract)</Typography>
                            <div className="flex flex-col my-4 gap-3">
                                <Typography variant="h6" className="font-bold"><b>Contract Information:</b></Typography>
                                <Typography><b>Contract Number:</b> HD001</Typography>
                                <Typography><b>Insurance Type:</b></Typography>
                                <Typography><b>Effective Date:</b> DD/MM/YYYY - Expiry Date: DD/MM/YYYY</Typography>
                                <Typography><b>Premium:</b> VND 10,000,000/year</Typography>
                                <Typography><b>Status:</b> In effect</Typography>
                                <Typography><b>Insured Property Information:</b></Typography>
                                <Typography><b>Property Address:</b></Typography>
                                <Typography><b>Area (m²):</b></Typography>
                                <Typography><b>Property Value:</b></Typography>
                                <Typography><b>Construction Materials:</b></Typography>

                                <div className="flex justify-between mt-4">
                                    <Button variant="contained" style={{ backgroundColor: "#90EE90", color: "black" }}>Renew Contract</Button>
                                    <Button variant="contained" style={{ backgroundColor: "#DC143C", color: "white" }}>Cancel Contract</Button>
                                </div>

                                <div className="mt-4">
                                    <Button variant="contained" component="label">
                                        Upload PDF Contract
                                        <input hidden accept="application/pdf" type="file" />
                                        <DriveFolderUploadIcon className="ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}