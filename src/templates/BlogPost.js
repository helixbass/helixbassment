import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import Layout from 'components/Layout'
import {graphql} from 'gatsby'

const BlogPost = flowMax(
  addDisplayName('BlogPost'),
  ({
    data: {
      markdownRemark: {
        frontmatter: {title},
        html,
      },
    },
  }) => (
    <Layout>
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
  )
)

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
