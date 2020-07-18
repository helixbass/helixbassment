import React from 'react'
import {flowMax, addDisplayName, addProps} from 'ad-hok'
import {Link, graphql} from 'gatsby'
import Layout from 'components/Layout'
import {headingFontStyles, artNouveauFontStyles} from 'utils/typography'
import colors from 'utils/colors'

const PostLink = flowMax(
  addDisplayName('PostLink'),
  addProps(({post: {frontmatter: {title}}}) => ({
    title,
  })),
  ({
    post: {
      frontmatter: {date, description},
      fields: {slug},
      excerpt,
    },
    title,
  }) => (
    <div css={styles.postContainer}>
      <h3 css={styles.title}>
        <Link to={`/blog${slug}`}>{title}</Link>
      </h3>
      <small css={styles.date}>{date}</small>
      <p dangerouslySetInnerHTML={{__html: description || excerpt}} />
    </div>
  )
)

const Blog = flowMax(
  addDisplayName('Blog'),
  ({
    data: {
      allMarkdownRemark: {edges},
    },
  }) => (
    <Layout>
      <div css={styles.container}>
        <h1 css={styles.header}>Recent posts</h1>
        {edges.map(({node}) => (
          <PostLink post={node} key={node.id} />
        ))}
      </div>
    </Layout>
  )
)

export default Blog

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const styles = {
  container: {
    marginTop: 25,
    paddingBottom: 51,
    maxWidth: 470,
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    color: colors.blueGreen,
    marginBottom: 3,
  },
  date: {
    ...headingFontStyles,
    fontWeight: 300,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    display: 'block',
    marginBottom: 7,
  },
  header: {
    ...artNouveauFontStyles,
    color: colors.gold,
    fontSize: 56,
    marginTop: 16,
    marginBottom: 24,
    display: 'none',
  },
  postContainer: {
    marginBottom: 41,
  },
}
