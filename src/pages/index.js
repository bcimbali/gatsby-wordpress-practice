import Image from '../components/image'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const testImage = data.allWordpressWpMedia.edges[0].node.source_url
  const imageCaption = data.allWordpressWpMedia.edges[0].node.caption
  return (
    <Layout>
      {console.log('data: ', data)}
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Guino Foxes</p>
      <img alt="Penguins walking" src={testImage} />
      {data.allWordpressWpMedia.edges[0].node.caption}
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allWordpressWpMedia {
      edges {
        node {
          id
          source_url
          slug
          link
          description
          caption
        }
      }
    }
  }
`
