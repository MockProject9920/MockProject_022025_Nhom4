import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Header from "@/components/Layout/Headers/Header";
import { AiFillHome } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import CustommerNavbar from "@/components/Layout/Navbars/CustommerNavbar";
import Input from "@/components/UI/Input/Input";
import Button from "@/components/UI/Button/Button";

function PersionalInfomation() {
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
                                <h1>Register for insurance</h1>
                            </div>
                        <div className="flex text-3xl">
                                <FaAngleRight className="mt-1" />
                                <h1>Persional Infomation</h1>
                        </div>
                    </div>
                    <CustommerNavbar/>
                    <h1 className="">Enter Owner Infomation</h1>
                    <div className="flex mt-10 ml-10">
                        <div className="mr-10">
                            <p className="mt-2">Full name:</p>
                            <p className="!mt-14">ID card/CCCD number:</p>
                            <p className="!mt-14">Phone number:</p>
                            <p className="!mt-14">Email:</p>
                        </div>
                       <div>
                            <Input big text className={""}/>
                            <Input big text className={"mt-10"}/>
                            <Input big text className={"mt-10"}/>
                            <Input big email className={"mt-10"}/>
    
                       </div>
                    </div>
                    <div className="my-10  w-full flex justify-center ">
                        <Button large className={"!w-40 !h-12 !bg-green-200 !mr-25"}>Continue</Button>
                    </div>
				</main>
			</div>
		</div>
     );
}

export default PersionalInfomation;