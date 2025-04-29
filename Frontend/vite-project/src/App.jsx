import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        {/* Optional: You could also redirect to '/login' or '/register' if you prefer */}
        <Route path="/" element={<Register />} /> 
   
      </Routes>
    </Router>
    </>
  )
}

export default App
