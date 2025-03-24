import { AppBar, Toolbar, Typography, Box, Avatar, Container, Grid } from "@mui/material";
import React from 'react'
import { ContractProcess } from "../Process/ContractProcess";
import { InsuranceDetailsForm } from "./InsuranceDetailsForm";
import { ContractManagerStatus } from "../Status/ContractManagerStatus";
import Sidebar from "../../Admin-SideBar/SideBar";
import { ContractManagerHeader } from "../Header/ContractManagerHeader";

export const InsuranceDetails = () => {
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
                            <ContractProcess activeStep={2} />
                        </Grid>

                        {/* Chi tiết bảo hiểm */}
                        <Grid item xs={8}>
                            <InsuranceDetailsForm />
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