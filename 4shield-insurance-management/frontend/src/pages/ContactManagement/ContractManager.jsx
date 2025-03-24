import { Box, Button } from "@mui/material";
import Sidebar from "./SideBar";
import Header from "./Header";
import { ContractTable } from "./ContractTable";
import { useNavigate } from "react-router-dom";


const ContractManager = () => {
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box>
                <Header />
                <Button variant="contained" color="primary" sx={{ margin: "10px 20px 0" }} onClick={() => navigate("/create-customer")}>Add new</Button>
                <ContractTable />
            </Box>
        </Box>
    );
};

export default ContractManager;
