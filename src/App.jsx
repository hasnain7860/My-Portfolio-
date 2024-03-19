import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home.jsx'
const App = () => {
  return (
    <Router>
    <Routes>
    <Route exact path='/' element={<Home/>} />
    </Routes>
    </Router>
  )
}

export default App