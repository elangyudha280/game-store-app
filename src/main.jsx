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
        <Route path='/'
         element={<ProtectedLogin>
            <App/>
         </ProtectedLogin>}/>
          <Route path='/dashboard' element={<ProtectedDashboard>
            <Dashboard/>
          </ProtectedDashboard>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
