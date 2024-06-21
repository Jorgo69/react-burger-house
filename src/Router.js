import React from 'react'
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function Router() {
  return (
    <BRouter>
      <Routes>
            {/* Notre composant */}
      <Route path='/' element={<HomePage/>} />
      </Routes>
    </BRouter>
  )
}
