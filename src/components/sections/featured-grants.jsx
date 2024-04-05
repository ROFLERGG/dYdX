import GrantCard from "../ui/card"

export default function Grants() {
  return (
    <div className="py-[80px] overflow-x-hidden">
      <div className="relative container max-lg:mx-0 max-lg:px-0">
        <div className="snap-x snap-mandatory overflow-x-scroll scrollbar-none flex">
          <GrantCard/>
        </div>
        <div className="max-lg:hidden">
          <a href="/" className="absolute left-0 inset-y-1/2 -translate-y-1/2 w-14 h-14 bg-white-100 rounded-full"></a>
          <a href="/" className="absolute right-0 inset-y-1/2 -translate-y-1/2 w-14 h-14 bg-white-100 rounded-full"></a>
        </div>
      </div>
    </div>
  )
}