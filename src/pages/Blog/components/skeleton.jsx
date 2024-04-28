const Skeleton = () => {
  return (
    <div className="flex flex-col flex-1 h-[440px] rounded-2xl bg-secondary">
      <div className="maxw-w-[380px] h-[200px] bg-white-500 rounded-2xl animate-pulse"/>
      <div className="p-6 flex flex-1 flex-col justify-between">
        <div className="flex flex-col space-y-2">
          <div className="bg-white-500 w-32 h-6 animate-pulse rounded-full"></div>
          <div className="bg-white-500 w-48 h-8 animate-pulse rounded-full"></div>
        </div>
        <div className="bg-white-500 w-36 h-6 animate-pulse rounded-full"></div>
      </div>
    </div>
  )
}

export default Skeleton