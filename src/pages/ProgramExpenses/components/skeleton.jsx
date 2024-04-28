const Skeleton = () => {
  return (
    <div className='flex justify-between items-start p-6 bg-secondary rounded-2xl gap-8 max-[500px]:flex-col'>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="bg-white-500 w-20 h-6 animate-pulse"></div>
          <div className="bg-white-500 w-14 h-6 animate-pulse"></div>
          <div className="bg-white-500 w-8 h-6 animate-pulse"></div>
        </div>
        <p className="paragraph-md text-white-100">{item.description}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="mono-paragraph-md text-white-500 text-nowrap">{item.amount}</span>
        <svg className="w-4 h-4">
          <use xlinkHref={Sprite + "#fi_external-link"} />
        </svg>
      </div>
    </div>
  )
}

export default Skeleton