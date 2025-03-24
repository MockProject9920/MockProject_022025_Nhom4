import React from 'react'
import Sidebar from '../SideBar'
import Header from '../Header'
import Breadcrumb from '../Breadcrumb'
import TabsContractManagement from '../TabsContractManagement'
import ListOfContractsMain from './ListOfContractsMain'
import Filter from './Filter'

const ListOfContracts = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Header />
                <div className='m-4'>
                    <Breadcrumb processName={"List Of Contracts"} />
                    <TabsContractManagement />
                    <Filter />
                    <ListOfContractsMain />
                </div>
            </div>

        </div>
    )
}

export default ListOfContracts
