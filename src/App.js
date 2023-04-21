import './App.css';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import PokeDetails from './components/PokeDetails'
import SearchBar from './components/SearchBar';

function App() {


  return (
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:details' element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
