import { useState } from "react"

const Tooltip = ({ text, children }) => {
  const top = 'position-top'
  const right = 'position-right'
  const bottom = 'position-bottom'
  const left = 'position-left'
  
  const [position, setPosition] = useState([top,right,bottom,left])

  return (
    <div data-tooltip={text} className={`tooltip ${isLeft ? `${left}` : ''} ${isRight ? `${right}` : ''} ${isTop ? `${top}` : ''} ${isBottom ? `${bottom}` : ''}`}>{children}</div>
  )
}

export default Tooltip