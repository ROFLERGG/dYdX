import Logo from "../assets/Logo.svg";
import './ui/buttons'
import Badges from "./ui/badges";
import Button from "./ui/buttons";
import sprite from './../assets/icons/sprite.svg'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <header className="w-full px-8 py-6">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <div className="flex items-center space-x-3 max-lg:hidden">
            <div className="flex items-center">
              <button className={Button({ nav:"default" })}>Discover initiatives</button>
              <button className={Button({ nav:"default" })}>Funded grants</button>
              <button className={Button({ nav:"default" })}>Program expenses</button>
              <button className={Button({ nav:"default" })}>Blog</button>
              <button className={Button({ nav:"default" })}>FAQ</button>
            </div>
            <button className={Button({ btn:"primary" })}>Apply for grant</button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer>1231</footer>
    </div>
  );
};

export default Layout