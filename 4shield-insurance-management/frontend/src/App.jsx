import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Auth/Login";
import RegisterInsurance from "./pages/AccountManagement/Insurance/RegisterInsurance";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Login />} /> */}
				<Route path="/" element={<RegisterInsurance />} />
			</Routes>
		</Router>
	);
}

export default App;
