import React from 'react'

import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Qualifications from '../components/qualifications'
import Services from '../components/services'
import Portfolio from '../components/portfolio'
import ProjectInMind from '../components/project-in-mind'
import Contact from '../components/contact'
class IndexPage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter Personal Website'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
        <ProjectInMind />
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage
