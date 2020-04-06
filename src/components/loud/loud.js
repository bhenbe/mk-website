import React from "react"
import "./loud.css"

const Loud = ({ text }) => {
  console.log(text)
  return (
    <p className="loud">{text}</p>
  )
}

export default Loud
