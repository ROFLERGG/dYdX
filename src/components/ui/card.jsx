const cardData = [
  {
    category: 'Crowdfund',
    title: 'Funding rates page', 
    amount: '$5,000 - $6,000', 
    description: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.', 
    url: '/', 
    users: ['1','2','3']
  },
  {
    image: 'test', 
    category: 'Edition', 
    title: 'Tradingview integration', 
    amount: '$5,000 - $6,000', 
    description: 'The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources.', 
    url: '/', 
    users: ['1','2','3']
  },
  {
    category: 'Entry', 
    title: 'Rewards optimization research and paper', 
    amount: '$5,000 - $6,000', 
    description: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.', 
    url: '/', 
    users: ['1','2','3']
  },
  {
    category: 'Crowdfund', 
    title: 'DAO Organizational Structure Research', 
    amount: '$5,000 - $6,000', 
    description: 'Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.', 
    url: '/', 
    users: ['1','2','3']
  }
]

const GrantCard = () => {
  return (
    cardData.map(({image, category, title, amount, description, url, users}, index) => {
      return (
        <div id={index + 1} className="px-4 flex shrink-0">
          <a href={url} className={`flex snap-center ${image && 'flex-col'} max-w-[392px] max-sm:max-w-[320px] max-[360px]:max-w-[256px] bg-secondary rounded-2xl`}>
            {/* image */}
            {image && 
            <div className="w-full h-[180px] bg-secondaryHover rounded-2xl"></div>
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
                {users.map(user => {
                  return (
                    <div className="w-[40px] h-[40px] bg-secondaryHover ring-2 ring-secondary rounded-full"></div>
                  )
                })}
              </div>
            </div>
          </a>
        </div>
      )
    })
  )
}

export default GrantCard