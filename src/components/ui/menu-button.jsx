import { useState } from 'react';
import MenuIcon from './../../assets/sprite.svg'

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const closed = `${MenuIcon + '#fi_menu'}`
  const opened = `${MenuIcon + '#fi_x'}`
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <button onClick={toggleMenu} className="p-3">
      <svg className="w-6 h-6">
        <use xlinkHref={`${isOpen ? opened : closed}`}></use>
      </svg>
    </button>
  )
}

export default MenuButton