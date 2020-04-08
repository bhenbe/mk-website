import React from "react"
import { Link } from "gatsby"
import "./cardProject.css"
import Image from "../image"

const CardProject = ({ align }) => {
  return (
    <article className={"card-project " + (align === "right" ? "card-project--right" : "card-project--left")}>
      <Link 
        to="/"
      >
        <Image/>
        <h2>The project title</h2>
        <span>The client name</span>
      </Link>
    </article>
  )
}

export default CardProject
