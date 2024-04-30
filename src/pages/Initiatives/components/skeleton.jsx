const Skeleton = () => {
  return (
    <div className="flex justify-between items-start space-x-8 bg-secondary rounded-2xl p-6 max-[400px]:space-x-0 max-[400px]:space-y-4 max-[400px]:flex-col">
      <div className="flex flex-col space-y-2">
        <div className="w-52 h-8 bg-white-100 opacity-20"></div>
        <div className="w-full h-6 bg-white-100 opacity-20"></div>
        <div className="w-[600px] h-6 bg-white-100 opacity-20"></div>
      </div>
      <div className="w-24 h-8 bg-white-100 opacity-20"></div>
    </div>
  )
}

export default Skeleton