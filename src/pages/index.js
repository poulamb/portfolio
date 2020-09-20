import React from "react"
import './styles.scss'
import Layout from "../components/layout.jsx"
import Intro from "../components/intro"
import Techstack from "../components/techstack"
import Workex from "../components/workex"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Intro />
    <Workex />
    <Techstack />
    <Contact />
  </Layout>
)

export default IndexPage
