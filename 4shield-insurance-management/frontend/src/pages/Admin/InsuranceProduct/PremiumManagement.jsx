import  { useState } from 'react';
import Table from './Table.jsx';
import   Header  from '../../../components/Layout/Header.jsx';
import Sidebar from '../../../components/Layout/Sidebar.jsx'

const PremiumManagement = () => {
    const premiums = [
        {
            id: '001',
            insuranceType: 'Homeowners',
            premiumFee: '$1,299 / year',
            estValueFrom: '$1,000',
            estValueTo: '$2,000',
            state: 'California, USA',
            effectiveDate: '01/01/2025',
        },
        {
            id: '002',
            insuranceType: 'Homeowners',
            premiumFee: '$2,799 / year',
            estValueFrom: '$2,001',
            estValueTo: '$5,000',
            state: 'Ha Noi, Viet Nam',
            effectiveDate: '01/01/2025',
        },
        {
            id: '003',
            insuranceType: 'Earthquake',
            premiumFee: '$1,499 / year',
            estValueFrom: '$1,000',
            estValueTo: '$2,000',
            state: 'Texas, USA',
            effectiveDate: '01/01/2025',
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const headers = [
        'Id', 'Insurance Type', 'Premium Fee', 'Est. Value From', 'Est. Value To', 'State, Country', 'Effective Date'
    ];

    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Header/>
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Premium Management</h2>
                        <button
                            className="bg-[#60B9F9] text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition flex items-center space-x-2">
                            Add New Premium
                        </button>
                    </div>

                    {/* Reusable Table Component */}
                    <Table
                        headers={headers}
                        data={premiums}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PremiumManagement;
