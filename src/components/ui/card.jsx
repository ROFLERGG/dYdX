import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// const cardData = [
//   {
//     id: 1,
//     category: 'Crowdfund',
//     title: 'Funding rates page', 
//     amount: '$5,000 - $6,000', 
//     description: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.', 
//     url: '/', 
//     users: ['1','2','3']
//   },
//   {
//     id: 2,
//     image: 'test', 
//     category: 'Edition', 
//     title: 'Tradingview integration', 
//     amount: '$5,000 - $6,000', 
//     description: 'The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources.', 
//     url: '/', 
//     users: ['1','2','3']
//   },
//   {
//     id: 3,
//     category: 'Entry', 
//     title: 'Rewards optimization research and paper', 
//     amount: '$5,000 - $6,000', 
//     description: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.', 
//     url: '/', 
//     users: ['1','2','3']
//   },
//   {
//     id: 4,
//     category: 'Crowdfund', 
//     title: 'DAO Organizational Structure Research', 
//     amount: '$5,000 - $6,000', 
//     description: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.', 
//     url: '/', 
//     users: ['1','2','3']
//   }
// ]
const GrantCard = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/grant-data.json')
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(false)
    })
  },[])

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    data.map(({ id, image, category, title, amount, description, team }) => {
      return (
        <div key={id} className="px-4 flex shrink-0">
          <Link to={`/grants/${id}`} className={`flex snap-center ${image && 'flex-col'} max-w-[360px] bg-secondary rounded-2xl hover:bg-secondaryHover duration-150 ease-in-out`}>
            {/* image */}
            {image && 
            <div className="w-full h-[180px] bg-[#232334] rounded-2xl"></div>
            }
            {/* content */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-tertiary mono-paragraph-md">{category}</p>
                  <p className="text-white-100 heading-md">{title}</p>
                  <p className="text-tertiary mono-paragraph-md flex space-x-2 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2">
                    <span>Funding amount:</span>
                    <span>{amount}</span>
                  </p>
                </div>
                <p className="text-white-100 paragraph-md">{description}</p>
              </div>
              {/* avatars */}
              <div className="flex items-center -space-x-4">
                {team.map((user, id) => {
                  return (
                    <div key={id} className="w-[40px] h-[40px] bg-secondaryHover ring-2 ring-secondary rounded-full">{id}</div>
                  )
                })}
              </div>
            </div>
          </Link>
        </div>
      )
    })
  )
}

const GrantCards = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/grant-data.json')
    .then(res => res.json())
    .then(data => {
      setData(data)
      setLoading(false)
    })
  },[])

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    data.map(({ id, image, category, title, amount, description, team }) => {
      return (
        <div key={id} className="px-4 flex shrink-0">
          <Link to={`/grants/${id}`} className={`flex snap-center ${image && 'flex-col'} max-w-[360px] bg-secondary rounded-2xl hover:bg-secondaryHover duration-150 ease-in-out`}>
            {/* image */}
            {image && 
            <div className="w-full h-[180px] bg-[#232334] rounded-2xl"></div>
            }
            {/* content */}
            <div className="p-6 flex flex-col justify-between space-y-4">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-tertiary mono-paragraph-md">{category}</p>
                  <p className="text-white-100 heading-md">{title}</p>
                  <p className="text-tertiary mono-paragraph-md flex space-x-2 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2">
                    <span>Funding amount:</span>
                    <span>{amount}</span>
                  </p>
                </div>
                <p className="text-white-100 paragraph-md">{description}</p>
              </div>
              {/* avatars */}
              <div className="flex items-center -space-x-4">
                {team.map((user, id) => {
                  return (
                    <div key={id} className="w-[40px] h-[40px] bg-secondaryHover ring-2 ring-secondary rounded-full">{id}</div>
                  )
                })}
              </div>
            </div>
          </Link>
        </div>
      )
    })
  )
}

export default GrantCard