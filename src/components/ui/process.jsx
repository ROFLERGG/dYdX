import Arrow1 from "./../../assets/right-arrow-1"
import Arrow2 from "./../../assets/right-arrow-2"

const ProcessCardData = [
  {
    number: "1",
    title: "Apply",
    description: "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background."
    arrow: "",
  },
  {
    number: "2",
    title: "Interview",
    description: "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background."
    arrow: "",
  },
  {
    number: "3",
    title: "Grant offer",
    description: "Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background."
  },
]

const ProcessCard = () => {
  return (
    ProcessCardData.map((data) => {
      return (
        <div className="flex flex-1 p-6 bg-secondary -rotate-1">
          <div className="flex flex-col space-y-6">
            <h2 className="number text-white-100">{data.number}</h2>
            <div className="flex flex-col space-y-3">
              <h2 className="heading-md text-white-100">{data.title}</h2>
              <p className="paragraph-md text-white-100">{data.description}</p>
            </div>
          </div>
        </div>
      )
    })
  )
}

export default ProcessCard