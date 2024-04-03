import Logo from "../assets/logo.svg";
import FooterLogo from "../assets/footer-logo.svg"
import './ui/buttons'
import Badges from "./ui/badges";
import Button from "./ui/buttons";
import Sprite from './../assets/sprite.svg'
import Tooltip from "./ui/tooltip";
import Menu from "./ui/menu"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <header className="w-full px-8 py-6 max-lg:px-6 max-lg:py-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="w-[112px] h-[66px] max-sm:w-[80px] max-sm:h-[48px]" src={Logo} alt="logo" />
          </a>
          <div className="flex items-center space-x-3 max-lg:hidden">
            <div className="flex items-center">
              <Button nav={'default'}>Discover initiatives</Button>
              <Button nav={'default'}>Funded grants</Button>
              <Button nav={'default'}>Program expenses</Button>
              <Button nav={'default'}>Blog</Button>
              <Button nav={'default'}>FAQ</Button>
            </div>
            <Button btn={'primary'}>Apply for grant</Button>
          </div>
          <div className="hidden items-center space-x-4 max-lg:flex">
            <Button btn={'primary'}>Apply</Button>
            <Menu/>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="w-full py-[60px] max-lg:py-[30px]">
        <div className="container">
          <div className="flex justify-between items-center max-lg:flex-col">
            <div className="flex items-center space-x-8">
              <a href="/">
                <img className="w-[60px] h-[60px]" src={FooterLogo} alt="footer-logo" />
              </a>
              <div className="flex items-center space-x-8">
                <Button nav={'default'}>About</Button>
                <Button nav={'default'}>FAQ</Button>
                <Button nav={'default'}>Brand assets</Button>
                <Button nav={'default'}>dYdX Foundation</Button>
                <Button nav={'default'}>dYdX trading</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout