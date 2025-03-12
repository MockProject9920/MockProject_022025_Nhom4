import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Auth/Register"
import { AuthLayout } from "./layouts"

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
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
