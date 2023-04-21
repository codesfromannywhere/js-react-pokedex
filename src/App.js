import './App.css';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import PokeDetails from './components/PokeDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:details' element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
