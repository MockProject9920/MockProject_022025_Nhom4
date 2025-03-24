import React from "react";
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
} from "@mui/material";

export const InsuranceDetailsForm = () => {
    const insuranceTypes = ["Homeowners", "Flood", "Auto", "Health"];

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Insurance Details
            </Typography>

            <TextField
                fullWidth
                select
                label="Insurance Type"
                variant="outlined"
                sx={{ mb: 2 }}
            >
                {insuranceTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                fullWidth
                label="Coverage Amount ($)"
                variant="outlined"
                sx={{ mb: 2 }}
            />

            <TextField
                fullWidth
                label="Payment Schedule"
                variant="outlined"
                select
                sx={{ mb: 2 }}
            >
                <MenuItem value="6-months">6 months</MenuItem>
                <MenuItem value="12-months">12 months</MenuItem>
            </TextField>

            <TextField
                fullWidth
                label="Start Date"
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
            />

            <TextField
                fullWidth
                label="End Date"
                variant="outlined"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 4 }}
            />

            <Box display="flex" justifyContent="space-between">
                <Button variant="contained" color="primary">Previous Page</Button>
                <Button variant="contained" color="success">Next Page</Button>
            </Box>
        </Box>
    );
};

