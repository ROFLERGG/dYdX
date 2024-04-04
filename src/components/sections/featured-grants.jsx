import GrantCard from "../ui/card"

export default function Grants() {
  return (
    <div className="py-[80px] overflow-x-hidden">
      <div className="container">
        <div className="snap-x snap-mandatory overflow-x-scroll flex">
          <GrantCard/>
        </div>
      </div>
    </div>
  )
}