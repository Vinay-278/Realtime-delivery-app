import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import Forgot from './Pages/Forgot.jsx'
import Verification from './Pages/verification.jsx'
import Change from './Pages/Change.jsx'
import LocationPermission from './Pages/LocationPermission.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Forgot/> */}
    {/* <Verification/> */}
    {/* <Change/> */}
    <LocationPermission/>

  </StrictMode>,
)
