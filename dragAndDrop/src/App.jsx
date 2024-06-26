// Route imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components imports
import Inicio from './components/Inicio'
import Adventure from './components/Adventure'
import Adventure2 from './components/Adventure2'
import Adventure3 from './components/Adventure3'

// Styles imports
import './index.css';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/adventure/2" element={<Adventure2 />} />
        <Route path="/adventure/3" element={<Adventure3 />} />
      </Routes>
    </Router>
  )
}

export default App
