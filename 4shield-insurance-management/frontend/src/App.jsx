import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { AuthLayout, DashboardLayout } from "./layouts"
import PersonalInformation from "./pages/Insurance/PersonalInformation"
import ProfileInformation from "./pages/PersonalProfile/ProfileInformation"
import ProfileSetting from "./pages/PersonalProfile/ProfileSetting"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='w-full min-h-screen flex flex-col items-center justify-center gap-4'>
              <h1 className='text-green-700 text-xl'>
                <Link to={"/auth/login"}>Login</Link>
              </h1>
              <h1 className='text-green-700 text-xl'>
                <Link to={"/dashboard"}>Dashboard</Link>
              </h1>
            </div>
          }
        />
        <Route path='auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='dashboard' element={<DashboardLayout />}>
          <Route path='insurance'>
            <Route
              path='asset-info'
              element={
                <>
                  <h1>Asset information</h1>
                </>
              }
            />
            <Route path='personal-info' element={<PersonalInformation />} />
            <Route
              path='payment-info'
              element={
                <>
                  <h1>Payment information</h1>
                </>
              }
            />
            <Route
              path='insurance-list'
              element={
                <>
                  <h1>Insurance list</h1>
                </>
              }
            />
          </Route>
          <Route
            path='personal-contract'
            element={
              <>
                <h1>Personal contract</h1>
              </>
            }
          />
          <Route
            path='claim'
            element={
              <>
                <h1>Claim</h1>
              </>
            }
          />
          <Route path='personal-profile'>
            <Route path='profile-info' element={<ProfileInformation />} />
            <Route path='security-setting' element={<ProfileSetting />} />
            <Route
              path='payment-setting'
              element={
                <>
                  <h1>Payment setting</h1>
                </>
              }
            />
            <Route
              path='support'
              element={
                <>
                  <h1>Account management & support</h1>
                </>
              }
            />
          </Route>
          <Route
            path='payment'
            element={
              <>
                <h1>Payment pay</h1>
              </>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
