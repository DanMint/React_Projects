import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import SelectFood from './SelectFood/SelectFood.jsx';
import Results from './Results/Results.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selectfood" element={<SelectFood />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
