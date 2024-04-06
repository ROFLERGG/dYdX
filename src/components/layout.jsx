import Logo from '../assets/logo.svg';
import FooterLogo from "../assets/footer-logo.svg"
import Badges from "./ui/badges";
import Button from "./ui/buttons";
import Sprite from './../assets/sprite.svg'
import Tooltip from "./ui/tooltip";
import MenuButton from "./ui/menu-button"
import Social from "./../assets/socials.svg"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <header className="w-full px-8 py-6 max-lg:px-6 max-lg:py-4">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="w-[112px] h-[66px]" src={Logo} alt="logo" />
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
            <MenuButton/>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="w-full py-[60px] max-lg:py-[30px]">
        <div className="container">
          <div className="flex justify-between items-center max-lg:flex-col max-lg:items-start max-lg:space-y-8">
            <div className="flex items-center space-x-8 max-lg:flex-col max-lg:items-start max-lg:space-x-0 max-lg:space-y-8">
              <a href="/">
                <img className="w-[60px] h-[60px]" src={FooterLogo} alt="footer-logo" />
              </a>
              <div className="flex items-center space-x-8 max-sm:space-x-0 max-sm:flex-col max-sm:items-start max-sm:space-y-6">
                <Button href='/' nav={'sm'}>About</Button>
                <Button href='/' nav={'sm'}>FAQ</Button>
                <Button href='/' nav={'sm'}>Brand assets</Button>
                <Button href='/' nav={'sm'}>
                  <div className="flex items-center space-x-2">
                    <span>dYdX Foundation</span>
                    <svg className="w-4 h-4">
                      <use xlinkHref={Sprite + '#fi_external-link'}/>
                    </svg>
                  </div>
                </Button>
                <Button href='/' nav={'sm'}>
                  <div className="flex items-center space-x-2">
                    <span>dYdX trading</span>
                    <svg className="w-4 h-4">
                      <use xlinkHref={Sprite + '#fi_external-link'}/>
                    </svg>
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-8 max-lg:items-start">
              <a href="/">
                <svg className="w-6 h-6">
                  <use xlinkHref={Social + '#Twitter'}/>
                </svg>
              </a>
              <a href="/">
                <svg className="w-6 h-6 ">
                  <use className="" xlinkHref={Social + '#Discord'}/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout