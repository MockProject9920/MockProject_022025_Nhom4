import React, { useState } from "react";
import { FaMicrophone } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const InsuranceContact = () => {
    const [agree, setAgree] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const navigate = useNavigate();

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleAgreeChange = () => {
        setAgree(!agree);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Top Header with Navigation */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-4">
                    <span className="text-lg text-gray-700"></span>
                    <div className="text-2xl font-bold">Contract Manager</div>
                    <span className="text-gray-500">/</span>
                    <div className="text-2xl font-bold">Create New Contract</div>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="text-gray-700 hover:text-blue-600 focus:outline-none">Dashboard</button>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-700">Admin</span>
                        <div
                            className="w-8 h-8 bg-gray-300 rounded-full flex justify-center items-center text-white font-bold">
                            A
                        </div>
                    </div>
                </div>
            </div>

            {/* Step Navigation */}
            <div className="mb-6">
                <div className="flex justify-between items-center max-w-[800px] mx-auto relative">
                    {['1', '2', '3', '4', '5'].map((step, index) => (
                        <div key={index} className="flex flex-col items-center w-1/5">
                            <div
                                className={`flex items-center justify-center w-12 h-12 rounded-full border-2 text-lg font-bold ${index === 4 ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'
                                    }`}
                            >
                                {step}
                            </div>
                            <div className={`mt-2 text-center text-sm font-semibold ${index === 4 ? 'text-blue-600 ' : 'text-gray-600'}`}>
                                {['Customer Information', 'Property Information', 'Insurance Details', 'Contract Status', 'Contract Terms'][index]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contract Form */}
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md max-w-[800px] mx-auto">
                {["option1", "option2", "option3", "option4"].map((option, index) => (
                    <div key={index} className="mb-4 flex items-center">
                        <input
                            type="radio"
                            id={option}
                            name="contractOption"
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                            className="mr-3 w-6 h-6"
                        />
                        <label htmlFor={option} className="text-gray-700">
                            {["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."][index]}
                        </label>
                    </div>
                ))}
            </div>

            <div className="flex justify-center my-6">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={handleAgreeChange}
                    className="mr-3 w-6 h-6"
                />
                <label htmlFor="agree" className="text-gray-700 text-lg">
                    Agree to the term of the Contract
                </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
                <button
                    className={`${agree ? "bg-orange-500 text-white" : "bg-gray-400 text-gray-500"} px-6 py-2 rounded-lg mx-auto`}
                    disabled={!agree}
                >
                    Save
                </button>
            </div>
            <button onClick={() => navigate("/contract-status")} className="bg-blue-600 mt-14 ml-4 text-white px-6 py-2 rounded-lg">Previous Page</button>
        </div>
    );
};

export default InsuranceContact;