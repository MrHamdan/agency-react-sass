import { useEffect, useState } from 'react';
import Choice from './Components/Choice';
import Contact from './Components/Contact';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import './Styles/Common.scss'
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  }, [isOpen])


  return (
    <div>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} />
      <Hero />
      <Choice/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
