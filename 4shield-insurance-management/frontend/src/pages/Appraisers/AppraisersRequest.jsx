import React from 'react'
import AdminLayout from "../../layouts/AdminLayout";
import AppraisersRequestTable from "../../components/UI/Table/AppraisersRequestTable";
const AppraisersRequest = () => {
    return (
        <div>
            <AdminLayout>
                <AppraisersRequestTable />
            </AdminLayout>
        </div>
    )
}

export default AppraisersRequest
