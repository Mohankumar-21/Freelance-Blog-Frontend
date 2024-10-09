
import NavBar from './component/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Detailpage from './component/Detailpage/Detailpage';



function App() {
  
  return (
    <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/:id" element={< Detailpage />} />
    </Routes>
  </Router>
  )
}

export default App
