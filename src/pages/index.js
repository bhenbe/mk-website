import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="loud">
      Des expériences mémorables au travers de solutions digitales sur mesure.
    </p>
    <Link to="/page-2/" className="btn">Go to page 2</Link>
  </Layout>
)

export default IndexPage
