import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Members from './Components/Members';
import Navbar from './Components/Navbar';
import Events from './Components/Events';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/Members" element={<Members />} /> 
        <Route path="/Events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App