import { forwardRef, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './ui/buttons'
import MenuIcon from './../assets/sprite.svg'
import { Link, useLocation } from 'react-router-dom'

const Header = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const closed = `${MenuIcon + '#fi_menu'}`
  const opened = `${MenuIcon + '#fi_x'}`
  const location = useLocation()
  const toggleMenu = (e) => {
    setIsOpen(isOpen => {
      ref.current.style.width = !isOpen ? "100%" : "auto"
      return !isOpen
    })
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  },[location])
  return (
    <header className="w-full px-6 py-4 z-40 fixed bg-primary rounded-b-2xl">
      <div className="flex justify-between items-center">
        <Link to="/" className='relative z-50'>
          <img className="w-[112px] h-[66px]" src={Logo} alt="logo" />
        </Link>
        <div className="flex items-center space-x-3">
            <ul className={`flex items-center max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:bg-secondary max-lg:space-y-6 duration-500 ease-in-out ${isOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"}`}>
              <li><Link to="/initiatives"><Button link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Discover initiatives</Button></Link></li>
              <li><Link to="/grants"><Button link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Funded grants</Button></Link></li>
              <li><Link to="/program"><Button link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Program expenses</Button></Link></li>
              <li><Link to="/blog"><Button link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>Blog</Button></Link></li>
              <li><Link to="/faq"><Button link={'default'} text={'grey'} className={'mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap'}>FAQ</Button></Link></li>
            </ul>
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
