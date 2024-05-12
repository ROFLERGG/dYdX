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
    <div className="flex flex-col min-h-screen bg-primary">
      <Header ref={menuRef} />
      <main className="flex flex-1 flex-col relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
