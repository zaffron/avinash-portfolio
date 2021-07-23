import React from 'react'
import { Link } from 'gatsby'

import Hero from '../components/hero'
import About from '../components/about'
import Skills from '../components/skills'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Button from '../components/button'
import Qualifications from '../components/qualifications'
import Services from '../components/services'
import Portfolio from '../components/portfolio'
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
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{' '}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's default starter blog running on Netlify
          CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
