import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaCheck, FaTimes } from 'react-icons/fa'; // Sử dụng react-icons/fa

function AssessmentReports() {
    const [report, setReport] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await fetch('http://localhost:8890/appraiser/appraisal-report/2');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data); // Kiểm tra dữ liệu trả về từ API
                setReport(data.data); // Sử dụng thuộc tính 'data' từ dữ liệu trả về
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchReport();
    }, []);

    const handleApprove = () => {
        // Xử lý khi nhấn nút Approve
        console.log("Approved");
    };

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
    }

    if (!report) {
        return <p className="text-center text-red-500">No report data available</p>;
    }

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <div className="flex-1 flex flex-col">
                <main className="mx-10">
                    <div className="flex items-center justify-between">
                        <div className="flex text-2xl mt-8">
                            <p className=""><strong>Appraiser</strong></p>
                            <FaAngleRight className="ml-2 mt-2 !mb-4 " />
                            <p className=""><strong>New Assessment Reports</strong></p>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="w-1/2 ">
                            <div className="flex">
                                <div className="!max-w-xl">
                                    <strong>
                                        <p>Report Number:</p>
                                        <p>Status:</p>
                                    </strong>
                                </div>
                                <div>
                                    <p>&nbsp;&nbsp;{report.id}</p>
                                    <p>&nbsp;{report.status}</p>
                                </div>
                            </div>
                            <strong><h1 className="ml-2 mt-10">1. GENERAL INFORMATION:</h1></strong>
                            <div className="flex mt-5">
                                <div>
                                    <strong>
                                        <p>Appraisal Date:</p>
                                        <p className="mt-10">Purpose:</p>
                                        <p className="mt-10">Risk Level:</p>
                                    </strong>
                                </div>
                                <div className="ml-10">
                                    <p>{report.appraisalDate}</p>
                                    <p className="mt-10">{report.purpose}</p>
                                    <p className="mt-10">{report.riskLevel}</p>
                                </div>
                            </div>
                        </div>
                        <span className="h-190 w-0.5 bg-gray-500"></span>
                        <div className="relative w-1/2 ">
                            <strong><h1 className="!ml-10">2. APPRAISER ASSESSMENT</h1></strong>
                            <div className="flex mt-4 !ml-10">
                                <div className="!max-w-xl">
                                    <strong>
                                        <p>Comparison Sales:</p>
                                        <p className="mt-10">Appraised Value (For Claim):</p>
                                        <p className="mt-10">Appraisal Method:</p>
                                        <p className="mt-10">Attachment:</p>
                                        <p className="mt-10">Appraisal Factors:</p>
                                    </strong>
                                </div>
                                <div>
                                    <p>&nbsp;&nbsp;{report.comparisonSales}</p>
                                    <p className="mt-10">&nbsp;&nbsp;{report.appraisedValue}</p>
                                    <p className="mt-10">{report.appraisalMethod}</p>
                                    <p className="mt-10">{report.attachment}</p>
                                    <p className="mt-10">{report.appraisalFactors}</p>
                                </div>
                            </div>
                            <div className="flex mt-4 !ml-10">
                                <div className="!max-w-xl">
                                    <strong>
                                        <p>Location:</p>
                                        <p className="mt-10">Size & Structure:</p>
                                        <p className="mt-10">Condition:</p>
                                        <p className="mt-10">Replacement Cost:</p>
                                        <p className="mt-10">Market Value:</p>
                                        <p className="mt-10">Assessment Value:</p>
                                        <p className="mt-10">Appraiser:</p>
                                    </strong>
                                </div>
                                <div className="ml-20">
                                    <p>&nbsp;&nbsp;{report.appraiserRequest.appraiser.address}</p>
                                    <p className="mt-10">&nbsp;&nbsp;{report.appraiserRequest.appraiser.type}</p>
                                    <p className="mt-10">{report.condition}</p>
                                    <p className="mt-10">{report.replacementCost}</p>
                                    <p className="mt-10">{report.marketValue}</p>
                                    <p className="mt-10">{report.assessmentValue}</p>
                                    <p className="mt-10">{report.appraiserRequest.appraiser.name}</p>
                                </div>
                            </div>
                            <div className="my-10 flex items-center justify-center gap-6">
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md flex items-center gap-2"
                                    onClick={handleApprove}
                                >
                                    <FaCheck /> Approve
                                </button>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md flex items-center gap-2">
                                    <FaTimes /> Reject
                                </button>
                            </div>
                        </div>
                        <span className="absolute bottom-138 left-230 !h-0.5 !w-120 !bg-gray-500"></span>
                        <span className="absolute bottom-63 left-230 !h-0.5 !w-120 !bg-gray-500"></span>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AssessmentReports;