/* Status Claims */
import { ClaimsProvider } from "./contexts/ClaimContext";

/* Toast Notification*/
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRouter";

function App() {
	return (
		<>
			<ToastContainer position="top-right" autoClose={3000} />
			<ClaimsProvider>
				<AppRoutes/>
			</ClaimsProvider>
		</>
	);
}

export default App;
