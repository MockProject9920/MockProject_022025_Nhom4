/* eslint-disable react/prop-types */
import { FaEdit, FaTimes, FaEnvelope } from "react-icons/fa";

const ActionButtons = ({ 
    onEdit, 
    onCancel, 
    onEmail, 
    showEdit = true, 
    showCancel = true, 
    showEmail = true 
}) => {
    return (
        <div className="flex gap-4">
            {showEdit && (
                <button 
                    onClick={onEdit} 
                    className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition"
                >
                    <FaEdit />
                    <span>Edit</span>
                </button>
            )}
            {showCancel && (
                <button 
                    onClick={onCancel} 
                    className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
                >
                    <FaTimes />
                    <span>Cancel</span>
                </button>
            )}
            {showEmail && (
                <button 
                    onClick={onEmail} 
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    <FaEnvelope />
                    <span>Email</span>
                </button>
            )}
        </div>
    );
};

export default ActionButtons;
