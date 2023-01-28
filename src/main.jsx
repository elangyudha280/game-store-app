import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import App from './component/App'
import './assets/index.css'
import Dashboard from './component/Dashboard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
