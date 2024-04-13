import CategoryHandler from "./categories"
import Badge from './../../../components/ui/badges'

const rfpItem = [
  {
    id: 1,
    title: 'Funding Rate Page',
    description: 'Page that provides a live look at all funding rates with popular timeframes in annualized format',
    amount: '$45,000 - $85,000',
    status: 'Funded'
  },
  {
    id: 2,
    title: 'CLI Trading Tool',
    description: 'Page that provides a live look at all funding rates with popular timeframes in annualized format',
    amount: '$25,000 - $40,000',
    status: 'Funded'
  },
  {
    id: 3,
    title: 'New Language SDKs',
    description: 'Page that provides a live look at all funding rates with popular timeframes in annualized format',
    amount: '$25,000 - $40,000',
    status: 'Open'
  },
  {
    id: 4,
    title: 'Liquidation Alert Tool',
    description: 'Page that provides a live look at all funding rates with popular timeframes in annualized format',
    amount: '$30,000 - $50,000',
    status: 'Completed'
  },
]

const Filter = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-center flex-wrap gap-3">
        <CategoryHandler/>
      </div>
      <div className="flex flex-col space-y-6">
        {rfpItem.map((item) => {
          return (
            <div key={item.id} className="flex justify-between items-start space-x-8 bg-secondary rounded-2xl p-6 max-[400px]:space-x-0 max-[400px]:space-y-8 max-[400px]:flex-col">
              <div className="flex flex-col space-y-2">
                <h2 className="heading-md text-white-100">{item.title}</h2>
                <p className="paragraph-md text-white-100">{item.description}</p>
                <div className="flex items-center space-x-2 mono-paragraph-md max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-sm:items-start">
                  <p className="text-white-500">Funding amount:</p>
                  <p className="text-white-500"> {item.amount}</p>
                </div>
              </div>
              <Badge>{item.status}</Badge>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Filter