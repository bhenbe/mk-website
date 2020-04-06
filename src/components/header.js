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
          <Link to="projets">Projets</Link>
        </li>
        <li>
          <Link to="services">Services</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
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
