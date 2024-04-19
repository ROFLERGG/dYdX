import { useState } from "react"
import Button from "../../../components/ui/buttons"
import Check from "./../../../assets/sprite.svg"
import Badge from "../../../components/ui/badges"

const cardData = [
  {
    id: 1,
    category: 'Technical / Tool Development',
    title: 'Hedgie banner',
    amount: '$5,000 - $6,000',
    description: 'They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.',
    users: ['1'],
    completed: true
  },
  {
    id: 2,
    category: 'Technical / Tool Development',
    title: 'Hedgie educational content',
    amount: '$5,000 - $6,000',
    description: 'They are mathematically consistent in the sense that no one rule would ever violate another.',
    users: ['1', '2'],
    completed: true
  },
  {
    id: 3,
    image: '/',
    category: 'Governance',
    title: 'Hedgie educational content',
    amount: '$5,000 - $6,000',
    description: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...',
    users: ['1', '2', '3', '4', '5', '6']
  },
  {
    id: 4,
    image: '/',
    category: 'Governance',
    title: 'Japanese content website',
    amount: '$5,000 - $6,000',
    description: 'Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...',
    users: ['1', '2', '3', '4']
  },
  {
    id: 5,
    category: 'Growth / Marketing',
    title: 'DGP referral program',
    amount: '$5,000 - $6,000',
    description: 'They finally obtained a consistent description of the behavior of matter on a small scale.',
    users: ['1', '2', '3']
  },
  {
    id: 6,
    image: '/',
    category: 'Growth / Marketing',
    title: 'ETHGlobal event sponsorship',
    amount: '$5,000 - $6,000',
    description: 'Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ...',
    users: ['1'],
    completed: true
  },
  {
    id: 7,
    category: 'Analytics',
    title: 'Rust SDK',
    amount: '$5,000 - $6,000',
    description: 'At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this',
    users: ['1', '2', '3']
  },
  {
    id: 8,
    category: 'Analytics',
    title: 'Hack for Inclusion Sponsorship',
    amount: '$5,000 - $6,000',
    description: 'Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. ',
    users: ['1', '2']
  },
  {
    id: 9,
    category: 'Third Party Provider',
    title: 'Gitcoin Grants Round 13 sponsorship',
    amount: '$5,000 - $6,000',
    description: 'So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.',
    users: ['1'],
    completed: true
  }
]

const CardFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showCompletedOnly, setShowCompletedOnly] = useState(false)

  let filteredCard = cardData.filter(card => {
    if (activeCategory !== 'All' && card.category !== activeCategory) {
      return false
    }
    if (showCompletedOnly && !card.completed) {
      return false
    }
    return true
  })
  // if (activeCategory === 'All') {
  //   filteredCard = cardData;
  // } else {
  //   filteredCard = cardData.filter(card => card.category === activeCategory)
  // }
  // if (showCompletedOnly) {
  //   filteredCard = cardData.filter(card => card.completed)
  // }
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
      <div className={`grid grid-cols-4 max-[1600px]:grid-cols-3 max-[1200px]:grid-cols-2 max-sm:grid-cols-1 ${filteredCard.length === 0 && 'hidden'}`}>
        {/* cards */}
        {filteredCard.map(({card, image, category, title, amount, description, users, completed}, index) => {
          return (
            <div id={index + 1} className="p-2 flex shrink-0">
              <a href='' className={`flex snap-center ${image && 'flex-col'} min-h-[400px] bg-secondary rounded-2xl hover:bg-secondaryHover duration-150 ease-in-out`}>
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
                      {users.map(user => {
                        return (
                          <div className="w-[40px] h-[40px] bg-secondaryHover ring-2 ring-secondary rounded-full"></div>
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
              </a>
            </div>
          )
        })}
      </div>
      {filteredCard.length === 0 &&
        <div className="flex justify-center items-center">
          <h2 className="heading-md text-white-500">Nothing found :(</h2>
        </div>
      }
    </div>
  )
}

export default CardFilter