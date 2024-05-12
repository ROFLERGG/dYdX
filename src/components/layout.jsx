import { useEffect, useRef } from 'react';
import Header from './header';
import Footer from './footer';
import Grid from '../assets/grid.png';

const Layout = ({ children }) => {
  const menuRef = useRef(null);
  useEffect(() => {
    menuRef.current = document.body;
    menuRef.current.style.width = 'auto';
    menuRef.current.style.overflow = 'visible';
  }, []);
  return (
    <div className="relative flex flex-col min-h-screen bg-primary">
      <img className="absolute" src={Grid} alt="" />
      <Header ref={menuRef} />
      <main className="flex flex-1 flex-col relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
