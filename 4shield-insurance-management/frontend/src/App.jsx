import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./layouts"
import PersonalInformation from "./pages/Insurance/PersonalInformation"

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
            <Route
              path='profile-info'
              element={
                <>
                  <h1>Profile information</h1>
                </>
              }
            />
            <Route
              path='security-setting'
              element={
                <>
                  <h1>Security & login setting</h1>
                </>
              }
            />
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
