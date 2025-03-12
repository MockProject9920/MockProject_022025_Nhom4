import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthLayout } from "./layouts"
import Login from "./pages/Auth/Login"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <h1>Hello world</h1>
            </>
          }
        />

        <Route path='auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
