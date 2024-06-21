import './App.css';
// aos animation
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Social } from './components/Social';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
