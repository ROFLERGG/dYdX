import FooterLogo from "../assets/footer-logo.svg"
import Button from "./ui/buttons";
import Sprite from './../assets/sprite.svg'
import Social from "./../assets/socials.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full py-[60px] max-lg:py-[30px]">
      <div className="container">
        <div className="flex justify-between items-center max-lg:flex-col max-lg:items-start max-lg:space-y-8">
          <div className="flex items-center space-x-8 max-lg:flex-col max-lg:items-start max-lg:space-x-0 max-lg:space-y-8">
            <Link to="/">
              <img className="w-[60px] h-[60px]" src={FooterLogo} alt="footer-logo" />
            </Link>
            <div className="flex items-center space-x-8 max-sm:space-x-0 max-sm:flex-col max-sm:items-start max-sm:space-y-6">
              <Button href='/' link={'sm'} text={'grey'} className={'mono-paragraph-md'}>About</Button>
              <Button href='/' link={'sm'} text={'grey'} className={'mono-paragraph-md'}>FAQ</Button>
              <Button href='/' link={'sm'} text={'grey'} className={'mono-paragraph-md'}>Brand assets</Button>
              <Button href='/' link={'sm'} text={'grey'} className={'mono-paragraph-md'}>
                <div className="flex items-center space-x-2">
                  <span>dYdX Foundation</span>
                  <svg className="w-4 h-4">
                    <use xlinkHref={Sprite + '#fi_external-link'}/>
                  </svg>
                </div>
              </Button>
              <Button href='/' link={'sm'} text={'grey'} className={'mono-paragraph-md'}>
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
  )
}

export default Footer