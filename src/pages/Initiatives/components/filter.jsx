import Badge from './../../../components/ui/badges'
import Button from "../../../components/ui/buttons"
import { useState } from 'react'

const rfpItem = [
  {
    id: 1,
    title: 'Funding Rate Page',
    description: 'Page that provides a live look at all funding rates with popular timeframes in annualized format',
    amount: '$45,000 - $85,000',
    category: 'Funded'
  },
  {
    id: 2,
    title: 'CLI Trading Tool',
    description: 'Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal',
    amount: '$25,000 - $40,000',
    category: 'Funded'
  },
  {
    id: 3,
    title: 'New Language SDKs',
    description: 'Replicate existing Python SDK to new programming languages with all the same features',
    amount: '$25,000 - $40,000',
    category: 'Open'
  },
  {
    id: 4,
    title: 'Liquidation Alert Tool',
    description: 'Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues',
    amount: '$30,000 - $50,000',
    category: 'Completed'
  },
  {
    id: 5,
    title: 'Governance Dashboard',
    description: 'Governance page to promote  discussions, proposals, delegation and voting',
    amount: '$15,000 - $30,000',
    category: 'Funded'
  },
  {
    id: 6,
    title: 'Delegation Tool',
    description: 'Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders',
    amount: '$15,000 - $30,000',
    category: 'Funded'
  },
  {
    id: 7,
    title: 'Newsletter',
    description: 'Weekly or Monthly newsletters promoting and educating the dYdX platform',
    amount: '$10,000 - $20,000',
    category: 'Funded'
  },
  {
    id: 8,
    title: 'Academy Contributions',
    description: 'Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX',
    amount: '$10,000 - $25,000',
    category: 'Funded'
  },
  {
    id: 9,
    title: 'Discord bots',
    description: 'Additional Discord bots that notify members of activity on dYdX and governance',
    amount: '$5,000 - $10,000',
    category: 'Open'
  },
  {
    id: 10,
    title: 'Reward tracking & Simulator',
    description: 'Page or tool that allows traders to calculate future rewards and simulate earnings from activity',
    amount: '$20,000 - $30,000',
    category: 'Funded'
  },
]
const Filter = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  let filteredItem
  if (activeCategory === "All") {
    filteredItem = rfpItem
  } else {
    filteredItem = rfpItem.filter(item => item.category === activeCategory)
  }
  return (
    <div className="flex flex-col space-y-10">
      <div className='flex justify-center'>
        <div className="flex gap-3 snap-mandatory overflow-x-scroll scrollbar-none">
          <Button onClick={() => setActiveCategory('All')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'All' && 'bg-secondary !text-white-100'}`}>All</Button>
          <Button onClick={() => setActiveCategory('Open')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Open' && 'bg-secondary !text-white-100'}`}>Open</Button>
          <Button onClick={() => setActiveCategory('Funded')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Funded' && 'bg-secondary !text-white-100'}`}>Funded</Button>
          <Button onClick={() => setActiveCategory('Completed')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Completed' && 'bg-secondary !text-white-100'}`}>Completed</Button>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        {filteredItem.map((item) => {
          return (
            <div key={item.id} className="flex justify-between items-start space-x-8 bg-secondary rounded-2xl p-6 max-[400px]:space-x-0 max-[400px]:space-y-4 max-[400px]:flex-col">
              <div className="flex flex-col space-y-2">
                <h2 className="heading-md text-white-100">{item.title}</h2>
                <p className="paragraph-md text-white-100">{item.description}</p>
                <div className="flex items-center space-x-2 mono-paragraph-md max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-sm:items-start">
                  <p className="text-white-500">Funding amount:</p>
                  <p className="text-white-500"> {item.amount}</p>
                </div>
              </div>
              {item.category === 'Open' && 
                <Badge variant={'open'}>{item.category}</Badge>
              }
              {item.category === 'Funded' && 
                <Badge variant={'funded'}>{item.category}</Badge>
              }
              {item.category === 'Completed' && 
                <Badge variant={'success'}>{item.category}</Badge>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter