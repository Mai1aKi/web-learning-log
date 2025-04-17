import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CalculatorPage from './pages/CalculatorPage';
import UnderConstructionPage from './pages/UnderConstructionPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UnderConstructionPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/under-construction" element={<UnderConstructionPage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  )
}
export default App;
