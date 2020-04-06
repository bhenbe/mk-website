import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Loud from "../components/loud/loud"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Loud text="Des expériences mémorables au travers de solutions digitales sur mesure." />
    <Link to="/page-2/" className="btn">Go to page 2</Link>
  </Layout>
)

export default IndexPage
