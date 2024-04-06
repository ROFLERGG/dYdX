import GrantCard from "../ui/card"
import Sprite from './../../assets/sprite.svg'
import Grid from './../../assets/grid.png'

export default function Grants() {
  return (
    <div className="pb-[80px]">
      <div className="container max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center relative overflow-hidden">
            <div className="max-w-[600px] py-[80px] max-lg:pb-[40px] z-50">
              <div className="px-4 flex flex-col items-center space-y-6">
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
            <div className="absolute top-0 min-w-[920px] h-full">
              <img className="grid object-cover object-center z-10 h-full" width={920} height={320} src={Grid} alt="grid" />
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