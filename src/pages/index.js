// import Image from '../components/image'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  // const testImage = data.allWordpressWpMedia.edges[0].node.source_url
  // const imageCaption = data.allWordpressWpMedia.edges[0].node.caption
  return (
    <Layout>
      {console.log('data: ', data)}
      <h1>Hi</h1>
      <p>Gatsby and Wordpress Style Here</p>
      {/* <img alt="Penguins walking" src={testImage} />
      {data.allWordpressWpMedia.edges[0].node.caption} */}
      {data.allWordpressWpMedia.edges.map(({ node }) => (
        <div key={node.slug}>
          <img key={node.id} alt={node.caption} src={node.source_url} />
          <p>{node.caption}</p>
        </div>
      ))}
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
