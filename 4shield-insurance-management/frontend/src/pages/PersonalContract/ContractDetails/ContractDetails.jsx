import React from 'react'
import Sidebar from '../SideBar'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import TabsContractManagement from '../TabsContractManagement'

const ContractDetails = () => {
    return (
        <div>
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <Header />
                    <div className='m-4'>
                        <Breadcrumb processName={"Contract Details"} />
                        <TabsContractManagement tabName={"Contract Details"} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContractDetails
