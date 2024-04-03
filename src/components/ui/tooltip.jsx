import { useState } from "react"

const Tooltip = ({ text, children }) => {
  const top = 'position-top'
  const right = 'position-right'
  const bottom = 'position-bottom'
  const left = 'position-left'
  
  const [positionIndex, setPositionIndex] = useState(0)

  const position = [top, right, bottom, left][positionIndex]

  return (
    <div data-tooltip={text} className={`tooltip ${position}`}>{children}</div>
  )
}

export default Tooltip