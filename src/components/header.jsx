import { forwardRef, useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import Button from './ui/buttons'
import MenuIcon from './../assets/sprite.svg'
import { NavLink, useLocation } from 'react-router-dom'

const Header = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const closed = `${MenuIcon + '#fi_menu'}`
  const opened = `${MenuIcon + '#fi_x'}`
  const location = useLocation()
  const toggleMenu = () => {
    setIsOpen(isOpen => {
      ref.current.style.width = !isOpen ? "100%" : "auto"
      ref.current.style.overflow = !isOpen ? "hidden" : "visible"
      return !isOpen
    })
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  },[location])
  // const [activePage, setActivePage] = useState('/')
  // const handlePageClick = (link) => {
  //   setActivePage(link)
  //   console.log(activePage);
  // }
  console.log(location);
  return (
    <header className="w-full px-6 py-4 z-40 fixed bg-primary rounded-b-2xl">
      <div className="flex justify-between items-center">
        <NavLink to="/" className='relative z-50'>
          <img className="w-[112px] h-[66px]" src={Logo} alt="logo" />
        </NavLink>
        <div className="flex items-center space-x-3">
          <ul className={`flex items-center max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:bg-secondary max-lg:space-y-6 duration-500 ease-in-out ${isOpen ? "max-lg:translate-x-0" : "max-lg:translate-x-full"}`}>
            <li><NavLink to="/initiatives"><Button link={'default'} text={'grey'} className={`mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap ${location.pathname === '/initiatives' ? '!text-white-100' : ''}`}>Discover initiatives</Button></NavLink></li>
            <li><NavLink to="/grants"><Button link={'default'} text={'grey'} className={`mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap ${location.pathname === '/grants' ? '!text-white-100' : ''}`}>Funded grants</Button></NavLink></li>
            <li><NavLink to="/program"><Button link={'default'} text={'grey'} className={`mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap ${location.pathname === '/program' ? '!text-white-100' : ''}`}>Program expenses</Button></NavLink></li>
            <li><NavLink to="/blog"><Button link={'default'} text={'grey'} className={`mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap ${location.pathname === '/blog' ? '!text-white-100' : ''}`}>Blog</Button></NavLink></li>
            <li><NavLink to="/faq"><Button link={'default'} text={'grey'} className={`mono-paragraph-md max-lg:mono-paragraph-xl whitespace-nowrap ${location.pathname === '/faq' ? '!text-white-100' : ''}`}>FAQ</Button></NavLink></li>
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
