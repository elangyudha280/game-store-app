import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './component/App'
import './assets/index.css'
import Dashboard from './component/Dashboard'
import ProtectedDashboard from './utils/protectedDashboard'
import ProtectedLogin from './utils/ProectedLogin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLogin/>}>
          <Route path='/' element={<App/> }/>
        </Route> 
        <Route element={<ProtectedDashboard/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
