import Grid from "./../../assets/grid.png"
import Sprite from "./../../assets/sprite.svg"

const News = () => {
  return (
    <div className="pb-[80px]">
      <div className="container max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center relative overflow-hidden">
            <div className="max-w-[600px] py-[80px] max-lg:py-[40px] z-50">
              <div className="px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center">
                  <h2 className="heading-lg text-white-100 text-center">What’s
                    <span className="relative inline-block px-2">
                      <span>new?</span>
                      <img className="absolute right-0 top-full" src="" alt="underline" />
                    </span>
                  </h2>
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
        </div>
      </div>
    </div>
  )
}

export default News