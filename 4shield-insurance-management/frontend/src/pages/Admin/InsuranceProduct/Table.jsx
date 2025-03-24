
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

const Table = ({ headers, data, itemsPerPage, currentPage, setCurrentPage }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            {/* Table */}
            <table className="w-full table-auto border-none">
                <thead>
                <tr className="bg-blue-100">
                    {headers.map((header, index) => (
                        <th key={index} className="px-4 py-2 text-left">{header}</th>
                    ))}
                    <th className="px-4 py-2 text-left">Action</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50">
                            {Object.values(item).map((value, index) => (
                                <td key={index} className="px-4 py-2">{value}</td>
                            ))}
                            <td className="px-4 py-2 flex space-x-2">
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition flex items-center space-x-2">
                                    <FaEye /> <span>View</span>
                                </button>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition flex items-center space-x-2">
                                    <FaEdit /> <span>Edit</span>
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center space-x-2">
                                    <FaTrash /> <span>Delete</span>
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center py-4">No data available</td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-6 flex justify-between">
                <button className="bg-gray-300 px-4 py-2 rounded" onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="flex items-center">{`Page ${currentPage} of ${totalPages}`}</span>
                <button className="bg-gray-300 px-4 py-2 rounded" onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
