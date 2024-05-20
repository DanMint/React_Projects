import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator/Calculator.jsx';
import History from './History/History.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
