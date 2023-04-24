// Infrastructure
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home'
// Components
import PokeDetails from './components/PokeDetails'
// Styling
import './App.css';

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
