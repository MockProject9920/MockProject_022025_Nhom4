import React from "react";
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
} from "@mui/material";

export const ContractStatusForm = () => {
    const status = ["Draft", "Under review", "Pending Approval", "Approved", "Signed", "Active"];
    const customer = [];
    const company = [];

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Contract Status
            </Typography>

            <TextField
                fullWidth
                select
                label="Contract Statue"
                variant="outlined"
                sx={{ mb: 2 }}
            >
                {status.map((type) => (
                    <MenuItem key={type} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                fullWidth
                select
                label="Agent Assigned"
                variant="outlined"
                sx={{ mb: 2 }}
            >
                {customer.map((type) => (
                    <MenuItem key={type} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                fullWidth
                select
                label="Company Insurance"
                variant="outlined"
                sx={{ mb: 2 }}
            >
                {company.map((type) => (
                    <MenuItem key={type} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>

            <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary">Previous Page</Button>
                <Button variant="contained" color="success">Next Page</Button>
            </Box>
        </Box>
    );
};

