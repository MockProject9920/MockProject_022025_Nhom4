import { Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'

const TabsContractManagement = (props) => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_, newValue) => {
        setTabValue(newValue);
    };
    return (
        <div>
            {/* Tabs */}
            <Tabs value={tabValue} onChange={handleTabChange} className="mb-4">
                <Tab label="List of Contracts" />
                <Tab label="Contract Details" />
            </Tabs>
        </div>
    )
}

export default TabsContractManagement
