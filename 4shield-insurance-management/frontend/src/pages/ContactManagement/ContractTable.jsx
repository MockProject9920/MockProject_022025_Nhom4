import React, { useState } from "react";
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Chip,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";



export const ContractTable = () => {
    const [search, setSearch] = useState("");

    const contracts = [
        {
            id: "ID 1",
            policyId: "POL-001",
            clientId: "001",
            staffName: "John D",
            propertyId: "PROP-456",
            insuranceType: "Homeowners",
            premiumCode: "HOME20204",
            status: "DRAFT",
            premiumAmount: "1,200",
            duration: "Annually",
            paymentSchedule: "Monthly",
            startDate: "01/01/2024",
            endDate: "01/01/2025",
            attachment: "file1.pdf",
            coverageAmount: "500,000",
            coveredPerils: "Fire, Theft, Storms",
            exclusions: "Earthquakes, Flooding",
            paymentHistory: "Paid",
            appraiser: "Jane A",
            appraisalStatus: "Finalized",
            totalAmount: "501,200",
        },
        {
            id: "ID 2",
            policyId: "POL-002",
            clientId: "002",
            staffName: "Alice K",
            propertyId: "PROP-789",
            insuranceType: "Flood",
            premiumCode: "FLO20204",
            status: "Under Review",
            premiumAmount: "800",
            duration: "Annually",
            paymentSchedule: "Monthly",
            startDate: "15/02/2024",
            endDate: "15/02/2025",
            attachment: "file2.pdf",
            coverageAmount: "300,000",
            coveredPerils: "Flood Damage",
            exclusions: "Earthquakes, Flooding, Negligence",
            paymentHistory: "Pending",
            appraiser: "Mark B",
            appraisalStatus: "Under review",
            totalAmount: "300,800",
        },
        {
            id: "ID 2",
            policyId: "POL-002",
            clientId: "002",
            staffName: "Alice K",
            propertyId: "PROP-789",
            insuranceType: "Flood",
            premiumCode: "FLO20204",
            status: "Under Review",
            premiumAmount: "800",
            duration: "Annually",
            paymentSchedule: "Monthly",
            startDate: "15/02/2024",
            endDate: "15/02/2025",
            attachment: "file2.pdf",
            coverageAmount: "300,000",
            coveredPerils: "Flood Damage",
            exclusions: "Earthquakes, Flooding, Negligence",
            paymentHistory: "Unpaid",
            appraiser: "Mark B",
            appraisalStatus: "Under review",
            totalAmount: "300,800",
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "DRAFT": return "#FFC107";
            case "Under Review": return "#4CAF50";
            default: return "#000";
        }
    };
    const getPaymentHistoryColor = (status) => {
        switch (status) {
            case "Unpaid": return "red";
            case "Paid": return "#4CAF50";
            case "Pending": return "#FFC107";
            default: return "#000";
        }
    };

    const filteredContracts = contracts.filter((contract) =>
        Object.values(contract).some((value) =>
            value.toLowerCase().includes(search.toLowerCase())
        )
    );

    return (
        <Box sx={{ p: 3 }}>
            <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Contract ID</TableCell>
                            <TableCell>Policy ID</TableCell>
                            <TableCell>Client ID</TableCell>
                            <TableCell>Staff Name</TableCell>
                            <TableCell>Property Id</TableCell>
                            <TableCell>Insurance Type</TableCell>
                            <TableCell>Premium Code</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Premium Amount</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Payment Schedule</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell>Attachment</TableCell>
                            <TableCell>Coverage Amount</TableCell>
                            <TableCell>Coverage Perils</TableCell>
                            <TableCell>Exclusions</TableCell>
                            <TableCell>Payment History</TableCell>
                            <TableCell>Appraiser</TableCell>
                            <TableCell>Appraiser Status</TableCell>
                            <TableCell>Total Amount </TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredContracts.map((contract, index) => (
                            <TableRow key={index}>
                                <TableCell>{contract.id}</TableCell>
                                <TableCell>{contract.policyId}</TableCell>
                                <TableCell>{contract.clientId}</TableCell>
                                <TableCell>{contract.staffName}</TableCell>
                                <TableCell>{contract.propertyId}</TableCell>
                                <TableCell>{contract.insuranceType}</TableCell>
                                <TableCell>{contract.premiumCode}</TableCell>
                                <TableCell>
                                    <Chip label={contract.status} sx={{ bgcolor: getStatusColor(contract.status), color: "#fff" }} />
                                </TableCell>
                                <TableCell>{contract.premiumAmount}</TableCell>
                                <TableCell>{contract.duration}</TableCell>
                                <TableCell>{contract.paymentSchedule}</TableCell>
                                <TableCell>{contract.startDate}</TableCell>
                                <TableCell>{contract.endDate}</TableCell>
                                <TableCell>{contract.attachment}</TableCell>
                                <TableCell>{contract.coverageAmount}</TableCell>
                                <TableCell>{contract.coveredPerils}</TableCell>
                                <TableCell>{contract.exclusions}</TableCell>
                                <TableCell>
                                    <Chip label={contract.paymentHistory} sx={{ bgcolor: getPaymentHistoryColor(contract.paymentHistory), color: "#fff" }} />
                                </TableCell>
                                <TableCell>{contract.appraiser}</TableCell>
                                <TableCell>{contract.appraisalStatus}</TableCell>
                                <TableCell>{contract.totalAmount}</TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <Visibility />
                                    </IconButton>
                                    <IconButton color="warning">
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error">
                                        <Delete />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};
