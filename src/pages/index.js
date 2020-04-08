import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loud from "../components/loud/loud"
import CardProject from "../components/cardProject/cardProject"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Loud text="Votre transition digitale commence ici." />
    <section className="grid-cols-12">
      <CardProject align="right"></CardProject>
      <CardProject align="left"></CardProject>
    </section>
  </Layout>
)

export default IndexPage
