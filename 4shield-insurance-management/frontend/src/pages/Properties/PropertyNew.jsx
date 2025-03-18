import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Header from "@/components/Layout/Headers/Header";
import Input from "@/components/UI/Input/Input";
import { FaBuilding,  FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import Button from "@/components/UI/Button/Button";

function PropertyNew() {
    const [isYear, setIsYear] = useState("")
    return ( 
        <div className="flex bg-gray-100 min-h-screen">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Header />
				<main className="mx-10">
					<div className="flex text-2xl mt-6">
                        <FaBuilding className="mr-2 mt-2 " />
                        <FaAngleRight className="mr-2 mt-2 " />
                        <p className="">Property Magement</p>

                        <FaAngleRight className="mr-2 mt-2 ml-10 " />
                        <p className="">Create new property</p>
                    </div>
                    <h1 className= "text-center mt-8 text-2xl">Property Infomations</h1>
                    <div className="mx-10 w-3/4">
                        <div className="flex justify-around justify-center items-center mt-10 ">
                            <div className=" ml-10 " >
                                <p className="mb-8">Property Type</p>
                                <p className="mt-12">Property Address 1</p>
                                <p className="mt-12">Property Address 2</p>
                                <p className="mt-12">Year Built</p>

                            </div>
                            <div className="ml-10">
                                <Input select big >
                                    <option className="text-center">-Choose type of property-</option>
                                </Input>
                                <Input className="mt-8" text big />
                                <Input className="mt-8" text big />
                                <Input 
                                    className=" mt-8"
                                    value = {isYear}
                                    onChange ={(e)=>setIsYear(e.target.value)} 
                                    select 
                                    large 
                                >
                                    <option className="text-center" value="">-Year-</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const y = new Date().getFullYear() - i;
                                        return <option key={y} value={y}>{y}</option>;
                                    })}
                                 </Input>
                            </div>
                        </div>
                        
                        <div className="flex justify-around justify-center items-center w-full">
                            <div className="w-1/2 ml-10 flex  mt-10">
                                <div className="mr-25 ml-10">
                                    <p>Lot Size (sq ft)</p>
                                    <p className="mt-10">Bedrooms</p>
                                </div>
                                <div className="">
                                    <Input className="!mr-4" text  small/> 
                                    <Input className="mt-10" text soSmall/>
                                </div> 
                            </div>
                            <div className="w-1/2  flex justify-around ml-20 mt-10">
                                <div className="">
                                    <p className="">Living Area (sq ft)</p>
                                    <p className="mt-16">Bathroooms</p>
                                </div>
                                <div className="">
                                    <Input className="!mr-6" text small/> 
                                    <Input className="mt-10" text  soSmall/> 
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 w-full flex ">
                            <p className=" !ml-20">Attached Garage</p>
                            <div className="flex !ml-12 text-lg">
                                <Input className="" radio textRight="Yes"/>
                                <Input radio textRight="No"/>
                            </div>
                        </div>
                        <div className="w-full flex justify-around mt-10">
                            <div className=" ml-10">
                                <p className="mt-2">Additional Features</p>
                                <p className="!mt-14">Recent Renovations</p>
                                <p className="!mt-14">Property Value ($)</p>
                            </div>
                            <div>
                                <Input className="!mr-4" text big />
                                <Input className="mt-10" text big />
                                <Input className="mt-10" text  small/>
                            </div> 
                        </div>
                    <div className=" w-full flex mx-10 mt-10 justify-between">
                        <Button className="!ml-6 !bg-blue-500 text-white" large rounded>Previous page</Button>
                        <Button className="!mr-16 !bg-yellow-500 text-white" large rounded>Save</Button>
                    </div>
                    </div>
				</main>
			</div>
		</div>
     );
}

export default PropertyNew;