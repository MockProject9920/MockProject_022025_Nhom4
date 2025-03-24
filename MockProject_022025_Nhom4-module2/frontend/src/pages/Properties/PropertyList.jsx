import { FaBuilding, FaAngleRight } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";
import { MdAttachFile } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PropertyList = () => {
    const [properties, setProperties] = useState([]); // State để lưu trữ dữ liệu từ API
    const [isFile, setIsFile] = useState(null);
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleOnChange = (e) => {
        setIsFile(e.target.files[0]);
    };

    // Sử dụng useEffect để gọi API khi component được mount
    useEffect(() => {
        fetch("http://localhost:8890/properties/all")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.data)) {
                    setProperties(data.data);
                } else {
                    console.error("Expected an array but got:", data);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex flex-col bg-gray-100 min-h-screen">
            <main className="mx-10 my-10">
                <div className="header-child flex justify-between items-center mb-6">
                    <div className="flex items-center text-2xl">
                        <FaBuilding className="mr-2" />
                        <FaAngleRight className="mr-2" />
                        <p>Property Management</p>
                    </div>
                    <Button
                        className="text-white"
                        primary
                        big
                        leftIcon={<IoIosAddCircleOutline />}
                        onClick={() => navigate("/properties/new")} // Điều hướng đến PropertyNew
                    >
                        Create new property
                    </Button>
                </div>
                <div className="overflow-x-auto border p-4">
                    <table className="table-auto border-collapse border border-gray-300 w-full bg-blue-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">Address</th>
                                <th className="border border-gray-300 px-4 py-2">City</th>
                                <th className="border border-gray-300 px-4 py-2">State</th>
                                <th className="border border-gray-300 px-4 py-2">Country</th>
                                <th className="border border-gray-300 px-4 py-2">Zip code</th>
                                <th className="border border-gray-300 px-4 py-2">Year Built</th>
                                <th className="border border-gray-300 px-4 py-2">Lot Size</th>
                                <th className="border border-gray-300 px-4 py-2">Living Area</th>
                                <th className="border border-gray-300 px-4 py-2">Bedrooms</th>
                                <th className="border border-gray-300 px-4 py-2">Bathrooms</th>
                                <th className="border border-gray-300 px-4 py-2">Attached Garage</th>
                                <th className="border border-gray-300 px-4 py-2">Additional Features</th>
                                <th className="border border-gray-300 px-4 py-2">Recent Renovations</th>
                                <th className="border border-gray-300 px-4 py-2">Estimated Value($)</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                                <th className="border border-gray-300 px-4 py-2">Home Insurance Claims (Last 3 years)</th>
                                <th className="border border-gray-300 px-4 py-2">Attachment File</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map(property => (
                                <tr key={property.id} className="bg-white text-center">
                                    <td className="border border-gray-300 px-4 py-2">{property.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.type}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.address}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.city}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.state}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.country}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.zipCode}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.yearBuilt}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.lotSizeSqft}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.livingAreaSqft}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.bedrooms}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.bathrooms}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.attachedGarage ? "Yes" : "No"}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.additionalFeatures}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.recentRenovations}</td>
                                    <td className="border border-gray-300 px-4 py-2">{property.estimatedValue}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Button className="!bg-red-600 text-white" small rounded>{property.status}</Button>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{property.homeInsuranceClaims}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {!isFile ? (
                                            <label htmlFor="input">
                                                Choose file
                                            </label>
                                        ) : (
                                            <p className="flex justify-center items-center"><MdAttachFile /> {isFile.name}</p>
                                        )}
                                        <Input id="input" onChange={handleOnChange} hidden file />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default PropertyList;