// Components
import PokeList from "../components/PokeList";
import Menu from '../components/Menu';
import LightDarkMode from "../components/LightDarkMode";
import { useState } from "react";





const Home = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={`${theme}`}>
      <LightDarkMode toggle={toggleTheme} />
      <PokeList>

        <Menu />
      </PokeList>
    </div>
  )
}

export default Home;