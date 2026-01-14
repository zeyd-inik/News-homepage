import './App.css';
import data from './data2';

import { useEffect, useState } from 'react';
import Featured from './components/Featured';
import Main from './components/Main';
import MobileMenu from './components/MobileMenu';
import Nav from './components/Nav';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1440) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="App">
      <div className="container">
        <Nav toggleMenu={toggleMenu} />

        <Main />
        <section className="featured_list">
          {data.map((item, index) => {
            return (
              <Featured
                key={index}
                index={index}
                {...item}
              />
            );
          })}
        </section>
        {isOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </div>
    </main>
  );
}
