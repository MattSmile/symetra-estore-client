import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Admin from './pages/Admin'
import Customer from './pages/Customer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="*" element={<Navigate to="/customer" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
