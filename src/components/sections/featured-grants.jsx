import GrantCard from "../ui/card"
import Sprite from './../../assets/sprite.svg'

export default function Grants() {
  return (
    <div className="py-[80px]">
      <div className="container max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col space-y-[60px]">
          <div className="flex justify-center">
            <div className="flex flex-col items-center space-y-6 max-w-[600px] px-4">
              <div className="flex flex-col space-y-4 text-center">
                <h2 className="heading-lg text-white-100">Projects built with grants</h2>
                <p className="paragraph-lg text-white-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.</p>
              </div>
              <a href="/" className="paragraph-lg text-brand flex items-center space-x-2 hover:underline">
                <span>View all funded projects</span>
                <svg className="w-6 h-6">
                  <use xlinkHref={Sprite + '#fi_arrow-right'}/>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative overflow-x-hidden">
            <div className="snap-x snap-mandatory overflow-x-scroll scrollbar-none flex">
              <GrantCard/>
            </div>
            <div className="max-lg:hidden">
              <a href="/" className="absolute left-0 inset-y-1/2 -translate-y-1/2 w-14 h-14 bg-white-100 rounded-full"></a>
              <a href="/" className="absolute right-0 inset-y-1/2 -translate-y-1/2 w-14 h-14 bg-white-100 rounded-full"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}