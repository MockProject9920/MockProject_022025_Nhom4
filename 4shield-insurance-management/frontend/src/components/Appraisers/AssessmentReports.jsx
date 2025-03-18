import Sidebar from "../Layout/Sidebar/Sidebar";
import HeaderAppraiser from "../Layout/Headers/HeaderAppraiser";
import {  FaAngleRight, FaFileArrowDown } from "react-icons/fa6";
import Button from "../UI/Button/Button";
import { FaTimes } from "react-icons/fa";

function AssessmentReports() {
    return (  
        <div className="flex bg-gray-100 min-h-screen">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<HeaderAppraiser />
				<main className="mx-10">
					<div className="flex items-center justify-between">
					    <div className="flex text-2xl mt-8">
                            <p className="" ><strong>Appraiser</strong></p>
                            <FaAngleRight className="ml-2 mt-2 !mb-4 " />
                            <p className="" ><strong>Assessment Reports</strong></p>
                        </div>
                        <div className="">
                            <Button 
                                large 
                                rounded 
                                leftIcon={<FaFileArrowDown />} 
                                className="!bg-gray-200 !h-12 !w-45"
                            >Download Reports
                            </Button>
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
                                    <p>&nbsp;&nbsp;#1</p>
                                    <p>&nbsp;Requesteds</p>
                                </div>
                            </div>
                            <strong><h1 className="ml-2 mt-10">1. GENERAL INFOMATION:</h1></strong>
                            <div className="flex mt-5">
                                <div>
                                   <strong>
                                        <p>Asset name:</p>
                                        <p className="mt-10">Address:</p>
                                        <p className="mt-10">Area:</p>
                                   </strong>
                                </div>
                                <div className="ml-10">
                                    <p>Appartment #123, Apple Valley Street</p>
                                    <p className="mt-10">123 Apple Valley, Uptown, USA</p>
                                    <p className="mt-10">85 m²</p>
                                </div>
                            </div>
                        </div>
                        <span className="h-190 w-0.5 bg-gray-500"></span>
                        <div className="relative w-1/2 ">
                            <strong><h1 className="!ml-10">2.APPRAISER ASSESSMENT</h1></strong>
                            <div className="flex mt-4 !ml-10">
                                <div className="!max-w-xl">
                                    <strong>
                                        <p>ComparisonSales:</p>
                                        <p className="mt-10">Appraised Value (For Claim):</p>
                                        <p className="mt-10">AppraisalMethod:</p>
                                        <p className="mt-10">Attachment:</p>
                                        <p className="mt-10">Appraisal Factors:</p>
                                    </strong>
                                </div>
                                <div>
                                    <p >&nbsp;&nbsp;#1</p>
                                    <p className="mt-10">&nbsp;&nbsp;Requesteds</p>
                                    <p className="mt-10">Status:</p>
                                    <p className="mt-10">Status:</p>
                                </div>
                            </div>
                            <div className="flex mt-4 !ml-10">
                                <div className="!max-w-xl">
                                    <strong>
                                        <p>Location:</p>
                                        <p className="mt-10">Size & Structure:</p>
                                        <p className="mt-10">Condition:</p>
                                        <p className="mt-10">ReplacementCost:</p>
                                        <p className="mt-10">MarketValue:</p>
                                        <p className="mt-10">AssessmentValue:</p>
                                        <p className="mt-10">Appraiser:</p>
                                    </strong>
                                </div>
                                <div className="ml-20">
                                    <p >&nbsp;&nbsp;#1</p>
                                    <p className="mt-10">&nbsp;&nbsp;Requesteds</p>
                                    <p className="mt-10">Status:</p>
                                    <p className="mt-10">Status:</p>
                                    <p className="mt-10">Appraisal Factors:</p>
                                    <p className="mt-10">Appraisal Factors:</p>
                                    <p className="mt-10">Appraisal Factors:</p>
                                </div>
                            </div>
                            <div className="my-10 flex items-center justify-center">
                                <Button large className={"!bg-green-500"}>Approve</Button>
                                <Button large leftIcon={<FaTimes />} className={"!bg-red-500 !ml-10"}>Reject</Button>
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