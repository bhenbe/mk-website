import React from "react"
import { Link } from "gatsby"
import "./cardProject.css"
import Image from "../image"

const CardProject = (align) => {
  return (
    <article className={"card-project " + (align === "right" ? "col-start-3 col-span-9" : "col-start-1 col-span-9")}>
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
