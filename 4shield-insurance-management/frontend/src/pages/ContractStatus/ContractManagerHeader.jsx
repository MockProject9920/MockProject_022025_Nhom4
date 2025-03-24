import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar } from "@mui/material";

export const ContractManagerHeader = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "#fff", color: "#000", display: "flex", alignItems: "end", boxShadow: "none" }}>
            <Toolbar>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ mr: 2 }}>Dashboard</Typography>
                    <Avatar sx={{ bgcolor: "#3f51b5" }}>A</Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
