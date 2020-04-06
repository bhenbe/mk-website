import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MkLogo from "../images/mk-logo.svg"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1>
      <Link
        to="/"
      >
        <img src={MkLogo} alt={siteTitle} />
      </Link>
    </h1>

    <nav className="nav">
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Projets</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
