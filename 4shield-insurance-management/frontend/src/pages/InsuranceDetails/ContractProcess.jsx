import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

export const ContractProcess = (props) => {
    const { activeStep } = props
    const steps = [
        "Customer Information",
        "Property Information",
        "Insurance Details",
        "Contract Status",
        "Contract Terms",
    ];

    return (
        <Box>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};