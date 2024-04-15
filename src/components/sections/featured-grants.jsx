import GrantCard from "../ui/card"
import Sprite from './../../assets/sprite.svg'
import Grid from './../../assets/grid.png'
import Button from "../ui/buttons"
import { Link } from "react-router-dom"

export default function Grants() {
  return (
    <div className="pb-[80px]">
      <div className="container max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center relative overflow-hidden">
            <div className="max-w-[600px] py-[80px] max-lg:pb-[40px] z-10">
              <div className="px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center">
                  <h2 className="heading-lg text-white-100">Projects built with grants</h2>
                  <p className="paragraph-lg text-white-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
                </div>
                <Link to='/grants'>
                  <Button href="/" link={'sm'} text={'brand'} className="paragraph-lg flex items-center space-x-2">
                    <span>View all funded projects</span>
                    <svg className="w-6 h-6">
                      <use xlinkHref={Sprite + '#fi_arrow-right'}/>
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute top-0 min-w-[920px] h-full">
              <img className="grid-img object-cover object-center h-full select-none" width={920} height={320} src={Grid} alt="grid" />
            </div>
          </div>
          <div className="relative overflow-x-hidden">
            <div className="snap-x snap-mandatory overflow-x-scroll scrollbar-none flex">
              <GrantCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}