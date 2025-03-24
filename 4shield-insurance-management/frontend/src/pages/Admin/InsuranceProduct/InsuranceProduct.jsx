import { useState } from 'react';
import Table from './Table.jsx';
import   Header  from '../../../components/Layout/Header.jsx';
import Sidebar from '../../../components/Layout/Sidebar.jsx'
const InsuranceProduct = () => {
    const products = [
        {
            id: '001',
            name: 'Home Protect Basic',
            type: 'Home Insurance',
            coverageAmount: '300,000 $',
            paymentMethod: 'Annual, Monthly',
        },
        {
            id: '002',
            name: 'Home Protect Plus',
            type: 'Home Insurance',
            coverageAmount: '500,000 $',
            paymentMethod: 'Annual, Monthly',
        },
        {
            id: '003',
            name: 'Home Protect Premium',
            type: 'Home Insurance',
            coverageAmount: '1,000,000 $',
            paymentMethod: 'Annual, Monthly',
        },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const headers = ['Id', 'Product Name', 'Insurance Type', 'Coverage Amount', 'Payment Method'];

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Insurance Product</h2>
                        <button className="bg-[#60B9F9] text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition flex items-center space-x-2">
                            Add New Product
                        </button>
                    </div>

                    {/* Reusable Table Component */}
                    <Table
                        headers={headers}
                        data={products}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>

    );
};

export default InsuranceProduct;
