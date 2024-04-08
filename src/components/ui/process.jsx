import Arrow1 from "./../../assets/right-arrow-1.png"
import Arrow2 from "./../../assets/right-arrow-2.png"

const ProcessCardData = [
  {
    number: "1",
    title: "Apply",
    description: "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.",
    arrow1: Arrow1,
  },
  {
    number: "2",
    title: "Interview",
    description: "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.",
    arrow2: Arrow2,
  },
  {
    number: "3",
    title: "Grant offer",
    description: "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.",
    arrow3: false
  },
]

const ProcessCard = () => {
  return (
    ProcessCardData.map((data) => {
      return (
        <div className={`flex flex-1 h-[400px] p-6 bg-secondary rounded-2xl relative ${data.arrow3 == false && "-rotate-2"} ${data.arrow1 && "-rotate-1"} ${data.arrow2 && "rotate-3"}`}>
          <div className="flex flex-col space-y-6">
            <h2 className="number text-white-100">{data.number}</h2>
            <div className="flex flex-col space-y-3">
              <h2 className="heading-md text-white-100">{data.title}</h2>
              <p className="paragraph-md text-white-100">{data.description}</p>
            </div>
          </div>
          {data.arrow1 &&
            <img src={data.arrow1} alt="arrow1" className="absolute -right-20 z-50"/>
          }
          {data.arrow2 &&
            <img src={data.arrow2} alt="arrow2" className="absolute bottom-5 -right-20 z-50"/>
          }
        </div>
      )
    })
  )
}

export default ProcessCard