const cardData = [
  {
    category: '',
    title: 'Hedgie banner',
    amount: '$5,000 - $6,000',
    description: 'They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.',
    users: ['1']
  },
  {
    category: '',
    title: 'Hedgie educational content',
    amount: '$5,000 - $6,000',
    description: 'They are mathematically consistent in the sense that no one rule would ever violate another.',
    users: ['1', '2']
  },
  {
    image: '/',
    category: '',
    title: 'Hedgie educational content',
    amount: '$5,000 - $6,000',
    description: 'This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then ...',
    users: ['1', '2', '3', '4', '5', '6']
  },
  {
    image: '/',
    category: '',
    title: 'Japanese content website',
    amount: '$5,000 - $6,000',
    description: 'Historically, the electron, for example, was thought to behave like a particle, and then it was found that in many respects it behaved like a ...',
    users: ['1', '2', '3', '4']
  },
  {
    category: '',
    title: 'DGP referral program',
    amount: '$5,000 - $6,000',
    description: 'They finally obtained a consistent description of the behavior of matter on a small scale.',
    users: ['1', '2', '3']
  },
  {
    image: '/',
    category: '',
    title: 'ETHGlobal event sponsorship',
    amount: '$5,000 - $6,000',
    description: 'Because atomic behavior is so unlike ordinary experience, it is very difficult to get used to, and it appears peculiar and mysterious to everyon ...',
    users: ['1']
  },
  {
    category: '',
    title: 'Rust SDK',
    amount: '$5,000 - $6,000',
    description: 'At the end of the 19th century, physics appeared to be at an apex. Several people are reported to have said something like this',
    users: ['1', '2', '3']
  },
  {
    category: '',
    title: 'Hack for Inclusion Sponsorship',
    amount: '$5,000 - $6,000',
    description: 'Later, however (in the beginning of the twentieth century), it was found that light did indeed sometimes behave like a particle. ',
    users: ['1', '2']
  },
  {
    category: '',
    title: 'Gitcoin Grants Round 13 sponsorship',
    amount: '$5,000 - $6,000',
    description: 'So we have to learn about them in a sort of abstract or imaginative fashion and not by connection with our direct experience.',
    users: ['1']
  }
]

const GrantCard = () => {
  return (
    cardData.map(({image, category, title, amount, description, users }, index) => {
      return (
        <div id={index + 1} className="p-2 flex shrink-0">
          <a href='' className={`flex snap-center ${image && 'flex-col'} h-[480px] max-lg:h-[400px] bg-secondary rounded-2xl hover:bg-secondaryHover duration-150 ease-in-out`}>
            {/* image */}
            {image && 
            <div className="w-full h-[180px] bg-[#232334] rounded-2xl"></div>
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