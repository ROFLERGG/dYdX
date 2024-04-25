import { useState } from "react"
import Button from "../../../components/ui/buttons"
import Check from "./../../../assets/sprite.svg"
import Badge from "../../../components/ui/badges"
import { Link } from "react-router-dom"
import GrantData from "../../../data/grant-data.json"
import GrantCard from "../../../components/ui/card"


const CardFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showCompletedOnly, setShowCompletedOnly] = useState(false)

  let filteredCard = GrantData.filter(card => {
    if (activeCategory !== 'All' && card.category !== activeCategory) {
      return false
    }
    if (showCompletedOnly && !card.completed) {
      return false
    }
    return true
  })

  return (
    <div className={`flex flex-col space-y-10`}>
      <div className="flex flex-col space-y-3">
        <div className='flex justify-start'>
          <div className="flex gap-3 snap-mandatory overflow-x-scroll scrollbar-none">
            <Button onClick={() => setActiveCategory('All')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'All' ? '!text-white-100 bg-secondary' : ''}`}>All</Button>
            <Button onClick={() => setActiveCategory('Technical / Tool Development')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Technical / Tool Development' ? '!text-white-100 bg-secondary' : ''}`}>Technical / Tool Development</Button>
            <Button onClick={() => setActiveCategory('Governance')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Governance' ? '!text-white-100 bg-secondary' : ''}`}>Governance</Button>
            <Button onClick={() => setActiveCategory('Growth / Marketing')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Growth / Marketing' ? '!text-white-100 bg-secondary' : ''}`}>Growth / Marketing</Button>
            <Button onClick={() => setActiveCategory('Analytics')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Analytics' ? '!text-white-100 bg-secondary' : ''}`}>Analytics</Button>
            <Button onClick={() => setActiveCategory('Third Party Provider')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Third Party Provider' ? '!text-white-100 bg-secondary' : ''}`}>Third Party Provider</Button>
          </div>
        </div>
        <div className="flex justify-start">
          <label className="flex items-center cursor-pointer pl-2">
            <input type="checkbox" value="" className="sr-only peer" onChange={() => setShowCompletedOnly(!showCompletedOnly)}/>
            <div className="relative w-[34px] h-3.5 rounded-full bg-secondary peer-checked:bg-brand transition-all duration-100 ease-in-out peer after:content-[''] after:absolute after:w-[18px] after:h-[18px] after:bg-white-100 after:rounded-full after:inset-y-1/2 after:-translate-y-1/2 after:peer-checked:translate-x-full rtl:after:peer-checked:-translate-x-full after:transition-all after:ease-in-out after:duration-150"></div>
            <span className="ms-3 text-white-500 peer-checked:text-white-100 duration-300">Show only completed</span>
          </label>
        </div>
      </div>
      <div className={`grid grid-cols-4 max-[1600px]:grid-cols-3 max-[1200px]:grid-cols-2 max-sm:grid-cols-1 gap-4 ${filteredCard.length === 0 ? 'hidden' : ''}`}>
        {/* cards */}
        {filteredCard.map(({image, category, title, amount, description, team, completed, id}) => {
          return (
            <div className="flex shrink-0">
              <Link to={`/grants/${id}`} className={`flex snap-center ${image && 'flex-col'} bg-secondary rounded-2xl hover:bg-secondaryHover duration-150 ease-in-out`}>
                {/* image */}
                {image && 
                <div className="w-full flex min-h-[180px] bg-[#232334] rounded-2xl"></div>
                }
                {/* content */}
                <div className="p-6 flex flex-1 flex-col justify-between space-y-4">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                      <p className="text-tertiary mono-paragraph-md">{category}</p>
                      <p className="text-white-100 heading-md">{title}</p>
                      <p className="text-tertiary mono-paragraph-md flex flex-wrap gap-2 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2">
                        <span>Funding amount:</span>
                        <span>{amount}</span>
                      </p>
                    </div>
                    <p className="text-white-100 paragraph-md line-clamp-3">{description}</p>
                  </div>
                  {/* avatars */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center -space-x-4">
                      {team.map((user, id) => {
                        return (
                          <div key={id} className="w-[40px] h-[40px] bg-secondaryHover ring-2 ring-secondary rounded-full">{id}</div>
                        )
                      })}
                    </div>
                    <div className="flex justify-center items-center">
                      {completed === true &&
                        <Badge variant={'success'} className={'space-x-2'}>
                          <span className="paragraph-sm text-white-100">Completed</span>
                          <svg className="w-5 h-5">
                            <use xlinkHref={Check + "#fi_check"}/>
                          </svg>
                        </Badge>
                      }
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      {filteredCard.length === 0 &&
        <div className="flex justify-center items-center min-h-[400px]">
          <h2 className="heading-md text-white-500">Nothing found :(</h2>
        </div>
      }
    </div>
  )
}

export default CardFilter