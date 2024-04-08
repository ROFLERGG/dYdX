import { useState } from "react"
import Plus from "./../../assets/sprite.svg"

const faqData = [
  {
    id: 0,
    question: "How do I apply?",
    answer: "Lorem ipsum dolor sit amet."
  },
  {
    id: 1,
    question: "Can I apply as a U.S. based person/company?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dignissimos!"
  },
  {
    id: 2,
    question: "How will I be compensated?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo eaque quis error accusantium sunt!"
  },
  {
    id: 3,
    question: "What type of project will qualify for a Grant?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in, maiores fugit rerum at nobis ipsa rem fugiat eos doloribus!"
  },
  {
    id: 4,
    question: "What is the application timeline? When can I expect to hear back?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum, earum porro, provident amet accusantium nam animi quaerat iste, fugit dolorem totam quis rerum exercitationem."
  },
  {
    id: 5,
    question: "How can I increase my chances of getting funded?",
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id maiores quaerat animi cum et, impedit nesciunt veniam porro tempora itaque, adipisci ea pariatur ipsum. Quaerat amet odit harum. Quisquam, iste."
  },
  {
    id: 6,
    question: "How often do you approve new Rounds of funding?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quo vero accusantium pariatur eaque nulla at aperiam molestiae possimus consequuntur nostrum accusamus libero voluptates, deserunt iste non voluptatum quisquam consectetur facilis sint error. Dolorum, rerum?"
  },
]

const AccordionButton = ({question, answer, id}) => {
  const [isOpen, setIsOpen] = useState(false)
  const setIsOpenHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <input type="checkbox" name="question" id={"question" + 1} className="hidden"/>
      <label onClick={setIsOpenHandler} htmlFor={"question" + 1} className="flex flex-col justify-center space-y-6 py-6 cursor-pointer select-none">
        <div className="flex justify-between space-x-6">
          <p className="paragraph-lg text-white-100">{question}</p>
          <svg className={`w-6 h-6 shrink-0 ${isOpen ? "rotate-45" : ""}`}>
            <use xlinkHref={Plus + "#fi_plus"}/>
          </svg>
        </div>
        {isOpen && 
          <p className="text-white-500">{answer}</p>
        }
      </label>
    </div>
  )
}

const FaqButton = () => {
  return (
    faqData.map(({question, answer}, index) => {
      return (
        <AccordionButton question={question} answer={answer} index={index}/>
      )
    })
  )
}

export default FaqButton