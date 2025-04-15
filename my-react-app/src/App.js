import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CalculatorPage from './pages/CalculatorPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  )
}
export default App;
