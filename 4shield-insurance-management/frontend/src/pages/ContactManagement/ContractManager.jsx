import { Box } from "@mui/material";
import { ContractTable } from "./ContractTable";
import Sidebar from "../Admin-SideBar/SideBar";
import Header from "../Admin-Header/Header";

const ContractManager = () => (
    <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box>
            <Header />
            <ContractTable />
        </Box>
    </Box>
);

export default ContractManager;
