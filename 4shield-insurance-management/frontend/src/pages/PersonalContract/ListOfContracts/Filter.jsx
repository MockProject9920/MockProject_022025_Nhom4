import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const Filter = () => {
    const [contractFilter, setContractFilter] = useState("");
    const [insuranceType, setInsuranceType] = useState("");
    return (
        <div className='w-full'>
            {/* Filters */}
            <Typography variant="h6" className="mb-2 font-bold">List of Contracts</Typography>
            <div className="flex mb-6 gap-4">
                <div className='flex flex-col w-[460px] gap-8'>
                    <FormControl variant="outlined" size="small" sx={{ width: "100%" }}>
                        <InputLabel>Contract Filter</InputLabel>
                        <Select
                            value={contractFilter}
                            onChange={(e) => setContractFilter(e.target.value)}
                            label="Contract Filter"
                        >
                            {['Active', 'Expiring', 'Expired', 'Canceled'].map((status) => (
                                <MenuItem key={status} value={status}>{status}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    <FormControl variant="outlined" size="small" sx={{ width: "100%" }}>
                        <InputLabel>Insurance Type</InputLabel>
                        <Select
                            value={insuranceType}
                            onChange={(e) => setInsuranceType(e.target.value)}
                            label="Insurance Type"
                        >
                            {['Health', 'Auto', 'Home', 'Life'].map((type) => (
                                <MenuItem key={type} value={type}>{type}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <Typography>Status: Active / Expiring / Expired / Canceled</Typography>
            </div>
        </div>
    )
}

export default Filter
