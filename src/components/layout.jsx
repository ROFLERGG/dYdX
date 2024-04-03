import Logo from "../assets/Logo.svg";
import './ui/buttons'
import Badges from "./ui/badges";
import Button from "./ui/buttons";
import sprite from './../assets/icons/sprite.svg'
import Tooltip from "./ui/tooltip";

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
              <Tooltip position={left} text={'ok'}>
                <Button nav='default'>
                  Discover initiatives
                </Button>
              </Tooltip>
              <Button nav='default'>Funded grants</Button>
              <Button nav='default'>Program expenses</Button>
              <Button nav='default'>Blog</Button>
              <Button nav='default'>FAQ</Button>
            </div>
            <Button btn={'primary'}>Apply for grant</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer>1231</footer>
    </div>
  );
};

export default Layout