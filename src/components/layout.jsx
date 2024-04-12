import { useEffect, useRef } from "react";
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  const menuRef = useRef(null)
  useEffect(() => {
    menuRef.current = document.body;
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header ref={menuRef}/>
      <main className="flex flex-1 flex-col relative pt-[98px]">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout