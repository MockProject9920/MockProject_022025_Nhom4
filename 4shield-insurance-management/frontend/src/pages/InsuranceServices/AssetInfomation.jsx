import Header from "@/components/Layout/Headers/Header";
import CustommerNavbar from "@/components/Layout/Navbars/CustommerNavbar";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Input from "@/components/UI/Input/Input";
import { AiFillHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import {useState} from 'react'
import Button from "@/components/UI/Button/Button";


function AssetInfomation() {
    const [isDay, setIsDay] = useState("");
    const [isMonth, setIsMonth] = useState("");
    const [isYear, setIsYear] = useState("");
    return ( 
        <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header />
            <main className="mx-10">
                <div className="flex">
                    <div className="flex text-3xl mr-10">
                        <AiFillHome  className="mt-1"/> 
                        <FaAngleRight className="mt-1" />
                        <h1>Register for oinsurance</h1>
                    </div>
                    <div className="flex text-3xl">
                        <FaAngleRight className="mt-1" />
                        <h1>Asset Infomation</h1>
                    </div>
                </div>
                <CustommerNavbar/>
                <h1 className="">Enter Property Infomation</h1>
                <div className="!mt-5 flex">
                    <p>Insurance Type:</p>
                    <p>(Dropdown): Homeowner,Flood,Earthquake,Additional Coverage</p>
                </div>
                <div className="mt-5 ml-5">
                    <Input className="" big text textLeft="Property Description:"></Input>
                    <Input className={"mt-5 !ml-6"} big text textLeft="Property Address:"></Input>
                    <Input className={"mt-5 !ml-20"} big text textLeft="Area (m²):"></Input>
                </div>
                <div className="flex !mt-5">
                    <p>Construction Materials: </p>
                    <p> (Dropdown): Concrete / Brick / Wood / Other</p>
                </div>
                <Input text big  className={"!mt-5 !w-147"} textLeft="Estimated Property Value:"></Input>
                <div>
                    <div className="mt-5">
                        <div className="flex">
                            <p className="mt-2">Coverage Start Date:</p>
                            <div className="flex justify-around">
                                <Input 
                                    className="!ml-20 "
                                    select 
                                    soSmall 
                                    value = {isDay}
                                    onChange={(e)=>setIsDay(e.target.value)}
                                >
                                    <option value="">Day</option>
                                        {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Input>
                                <Input 
                                    className="!ml-20"
                                    select 
                                    soSmall 
                                    value = {isMonth}
                                    onChange={(e)=>setIsMonth(e.target.value)}
                                >
                                    <option value="">Month</option>
                                        {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Input>
                                <Input 
                                    className="!ml-20"
                                    select 
                                    soSmall 
                                    value = {isYear}
                                    onChange={(e)=>setIsYear(e.target.value)}
                                >
                                    <option value="">Year</option>
                                        {Array.from({ length: 100 }, (_, i) => {
                                        const y = new Date().getFullYear() - i;
                                        return <option key={y} value={y}>{y}</option>;
                                     })}
                                </Input>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex">
                            <p className="!mt-2">Coverage End Date:</p>
                            <div className="flex justify-around">
                                <Input 
                                    className="!ml-22"
                                    select 
                                    soSmall 
                                    value = {isDay}
                                    onChange={(e)=>setIsDay(e.target.value)}
                                >
                                    <option value="">Day</option>
                                        {Array.from({ length: 31 }, (_, i) => (
                                        <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Input>
                                <Input 
                                    className="!ml-20"
                                    select 
                                    soSmall 
                                    value = {isMonth}
                                    onChange={(e)=>setIsMonth(e.target.value)}
                                >
                                    <option value="">Month</option>
                                        {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                    ))}
                                </Input>
                                <Input 
                                    className="!ml-20"
                                    select 
                                    soSmall 
                                    value = {isYear}
                                    onChange={(e)=>setIsYear(e.target.value)}
                                >
                                    <option value="">Year</option>
                                        {Array.from({ length: 100 }, (_, i) => {
                                        const y = new Date().getFullYear() - i;
                                        return <option key={y} value={y}>{y}</option>;
                                     })}
                                </Input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5"><Input className={"w-135"} large text textLeft="Risk Information & Loss History:"/></div>
                <div className="flex w-3/4 justify-center"><Button big rounded className={"text-white !my-10 !bg-green-400"}>Continue</Button></div>
            </main>
        </div>
    </div>
     );
}

export default AssetInfomation;