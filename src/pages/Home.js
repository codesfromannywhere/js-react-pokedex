// Components
import PokeList from "../components/PokeList";
import LightDarkMode from "../components/LightDarkMode";
import { useState } from "react";

const Home = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('background');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className={`${theme}`}>
      <LightDarkMode toggle={toggleTheme} />
      <PokeList />
    </div>
  )
}

export default Home;