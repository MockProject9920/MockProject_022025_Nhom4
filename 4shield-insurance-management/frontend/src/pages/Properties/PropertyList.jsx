import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Header from "@/components/Layout/Headers/Header";
import { FaBuilding,  FaAngleRight } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
const PropertyList = () => {
	const [isFile,setIsFile] = useState(null)

	const handleOnChange=(e)=>{
		setIsFile(e.target.files[0])
	}
	return (
		<div className="flex bg-gray-100 min-h-screen">
			<Sidebar />
			<div className="flex-1 flex flex-col">
				<Header />
				<main className="mx-10">
					<div className="header-child flex justify-between">
						<div className="flex text-2xl mt-10">
							<FaBuilding className="mr-2 mt-2 " />
							<FaAngleRight className="mr-2 mt-2 " />
							<p className="" >Property Magement</p>
						</div>
						<Button className={"mt-5 text-white"} primary big leftIcon={<IoIosAddCircleOutline/>}>Create new property</Button>
					</div>
					<div className="w-300 overflow-x-auto border p-4 mt-10">
						

					<table className="table-auto border-collapse border border-gray-300 w-full w-[500px] bg-blue-200 p-2">
						<thead>
    						<tr className="bg-gray-100">
      						<th className="border border-gray-300 px-4 py-2">ID</th>
      						<th className="border border-gray-300 px-4 py-2">Type</th>
      						<th className="border border-gray-300 px-4 py-2">Address1</th>
      						<th className="border border-gray-300 px-4 py-2">Address2</th>
      						<th className="border border-gray-300 px-4 py-2">City</th>

							<th className="border border-gray-300 px-4 py-2">State</th>
      						<th className="border border-gray-300 px-4 py-2">Country</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Zip code</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Year Built</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Lot Size</th>

							<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Living Area</th>
      						<th className="border border-gray-300 px-4 py-2">Bedrooms</th>
      						<th className="border border-gray-300 px-4 py-2">Bathrooms</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Attached Garage</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Additional Features</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Recent Renovations</th>

							<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Estimated Value($)</th>
      						<th className="border border-gray-300 px-4 py-2">Status</th>
      						<th className="border border-gray-300 px-4 py-2 min-w-[200px]">Home Insurance Claims (Last 3 years)</th>
      						<th className="border border-gray-300 px-4 py-2 whitespace-nowrap">Attachment File</th>
    						</tr>
  						</thead>
						<tbody>
							<tr className="bg-white text-center">
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">001</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">Aparment</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">123 Main ST</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">APT 4B</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">New York</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">NY</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">USA</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">10001</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">2001</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">N/A</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">900</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">2</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">1</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">No</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">Baconly, Gym access</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">New Florring</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">450,000</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">
									<Button className={"!bg-red-600 text-white"} small rounded>Actived</Button>
								</td>
								<td className ="border border-gray-300 px-4 py-2 whitespace-nowrap">No</td>
								<td className =" border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[200px]">
									{!isFile ?
										(<label htmlFor="input">
											Choice file
										</label>
										):
										(
											<p className="flex justify-center items-center">< MdAttachFile/> {isFile.name}</p>
										)
									}
										<Input id="input" onChange={handleOnChange} hidden file/>
									
								</td>
							</tr>
						</tbody>
					</table>
					</div>
				</main>
			</div>
		</div>
	);
};

export default PropertyList;
