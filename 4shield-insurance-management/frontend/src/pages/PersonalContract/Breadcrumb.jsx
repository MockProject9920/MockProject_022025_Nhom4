import { Typography } from '@mui/material'
import React from 'react'

const Breadcrumb = (props) => {
    const { processName } = props;
    return (
        <div>
            <Typography variant="h6">
                <b>Personal Contract</b> &gt; {processName}
            </Typography>
        </div>
    )
}

export default Breadcrumb
