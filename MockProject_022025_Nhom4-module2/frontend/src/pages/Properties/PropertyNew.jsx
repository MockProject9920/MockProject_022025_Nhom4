import Input from "@/components/UI/Input/Input";
import { FaBuilding, FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import Button from "@/components/UI/Button/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function PropertyNew() {
    const [isYear, setIsYear] = useState("");
    const [propertyData, setPropertyData] = useState({
        type: "",
        address1: "",
        address2: "",
        yearBuilt: "",
        lotSize: "",
        bedrooms: "",
        bathrooms: "",
        livingArea: "",
        attachedGarage: "",
        additionalFeatures: "",
        recentRenovations: "",
        estimatedValue: "",
    });
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPropertyData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        console.log("Sending data:", propertyData); // Log dữ liệu trước khi gửi đi
        fetch("http://localhost:8890/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(propertyData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                navigate("/properties"); // Điều hướng về PropertyList sau khi lưu thành công
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <div className="flex-1 flex flex-col">
                <main className="mx-10">
                    <div className="flex text-2xl mt-6">
                        <FaBuilding className="mr-2 mt-2 " />
                        <FaAngleRight className="mr-2 mt-2 " />
                        <p className="">Property Management</p>

                        <FaAngleRight className="mr-2 mt-2 ml-10 " />
                        <p className="">Create new property</p>
                    </div>
                    <h1 className="text-center mt-8 text-2xl">Property Information</h1>
                    <div className="mx-10 w-3/4">
                        <div className="flex justify-around justify-center items-center mt-10 ">
                            <div className=" ml-10 ">
                                <p className="mb-8">Property Type</p>
                                <p className="mt-12">Property Address 1</p>
                                <p className="mt-12">Property Address 2</p>
                                <p className="mt-12">Year Built</p>
                            </div>
                            <div className="ml-10">
                                <Input
                                    select
                                    big
                                    name="type"
                                    value={propertyData.type}
                                    onChange={handleChange}
                                >
                                    <option className="text-center">-Choose type of property-</option>
                                </Input>
                                <Input
                                    className="mt-8"
                                    text="true"
                                    big
                                    name="address1"
                                    value={propertyData.address1}
                                    onChange={handleChange}
                                />
                                <Input
                                    className="mt-8"
                                    text="true"
                                    big
                                    name="address2"
                                    value={propertyData.address2}
                                    onChange={handleChange}
                                />
                                <Input
                                    className=" mt-8"
                                    value={isYear}
                                    onChange={(e) => {
                                        setIsYear(e.target.value);
                                        handleChange(e);
                                    }}
                                    select
                                    large
                                    name="yearBuilt"
                                >
                                    <option className="text-center" value="">
                                        -Year-
                                    </option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const y = new Date().getFullYear() - i;
                                        return (
                                            <option key={y} value={y}>
                                                {y}
                                            </option>
                                        );
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
                                    <Input
                                        className="!mr-4"
                                        text="true"
                                        small
                                        name="lotSize"
                                        value={propertyData.lotSize}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        className="mt-10"
                                        text="true"
                                        soSmall
                                        name="bedrooms"
                                        value={propertyData.bedrooms}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="w-1/2  flex justify-around ml-20 mt-10">
                                <div className="">
                                    <p className="">Living Area (sq ft)</p>
                                    <p className="mt-16">Bathrooms</p>
                                </div>
                                <div className="">
                                    <Input
                                        className="!mr-6"
                                        text="true"
                                        small
                                        name="livingArea"
                                        value={propertyData.livingArea}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        className="mt-10"
                                        text="true"
                                        soSmall
                                        name="bathrooms"
                                        value={propertyData.bathrooms}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 w-full flex ">
                            <p className=" !ml-20">Attached Garage</p>
                            <div className="flex !ml-12 text-lg">
                                <Input
                                    className=""
                                    radio
                                    textRight="Yes"
                                    name="attachedGarage"
                                    value="Yes"
                                    checked={propertyData.attachedGarage === "Yes"}
                                    onChange={handleChange}
                                />
                                <Input
                                    radio
                                    textRight="No"
                                    name="attachedGarage"
                                    value="No"
                                    checked={propertyData.attachedGarage === "No"}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-around mt-10">
                            <div className=" ml-10">
                                <p className="mt-2">Additional Features</p>
                                <p className="!mt-14">Recent Renovations</p>
                                <p className="!mt-14">Property Value ($)</p>
                            </div>
                            <div>
                                <Input
                                    className="!mr-4"
                                    text="true"
                                    big
                                    name="additionalFeatures"
                                    value={propertyData.additionalFeatures}
                                    onChange={handleChange}
                                />
                                <Input
                                    className="mt-10"
                                    text="true"
                                    big
                                    name="recentRenovations"
                                    value={propertyData.recentRenovations}
                                    onChange={handleChange}
                                />
                                <Input
                                    className="mt-10"
                                    text="true"
                                    small
                                    name="estimatedValue"
                                    value={propertyData.estimatedValue}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className=" w-full flex mx-10 mt-10 justify-between">
                            <Button
                                className="!ml-6 !bg-blue-500 text-white"
                                large
                                rounded
                                onClick={() => navigate("/properties")}
                            >
                                Previous page
                            </Button>
                            <Button
                                className="!mr-16 !bg-yellow-500 text-white"
                                large
                                rounded
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PropertyNew;