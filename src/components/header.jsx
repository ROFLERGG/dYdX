import { forwardRef, useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from "./ui/buttons"
import MenuIcon from "./../assets/sprite.svg"

const Header = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const closed = `${MenuIcon + '#fi_menu'}`
  const opened = `${MenuIcon + '#fi_x'}`
  const toggleMenu = () => {
    setIsOpen((isOpen) => {
      ref.current.style.overflowY = !isOpen ? "hidden" : "visible"
      return !isOpen
    })
  }
  return (
    <header className="w-full px-6 py-4 z-40 fixed bg-primary rounded-b-2xl">
      <div className="flex justify-between items-center">
        <a href="/" className='relative z-50'>
          <img className="w-[112px] h-[66px]" src={Logo} alt="logo" />
        </a>
        <div className="flex items-center space-x-3">
          <nav>
            <ul className={`flex items-center max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:bg-secondary max-lg:space-y-8 duration-500 ease-in-out ${isOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"}`}>
              <li><Button href={'/'} link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Discover initiatives</Button></li>
              <li><Button href={'/'} link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Funded grants</Button></li>
              <li><Button href={'/'} link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Program expenses</Button></li>
              <li><Button href={'/'} link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Blog</Button></li>
              <li><Button href={'/'} link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>FAQ</Button></li>
            </ul>
          </nav>
          <Button btn={'primary'} bg={'brand'} text={'white'} className={'label whitespace-nowrap z-40'}>Apply for grant</Button>
          <button onClick={toggleMenu} className="p-3 relative hidden max-lg:block">
            <svg className="w-6 h-6">
              <use xlinkHref={`${isOpen ? opened : closed}`}></use>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
})

export default Header
