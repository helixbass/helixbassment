const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, getNode, actions: {createNodeField}}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode})
    createNodeField({node, name: 'slug', value: slug})
  }
}

exports.createPages = async ({graphql, actions: {createPage}}) => {
  const {
    data: {
      allMarkdownRemark: {edges},
    },
  } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  edges.forEach(
    ({
      node: {
        fields: {slug},
      },
    }) => {
      createPage({
        path: `/blog${slug}`,
        component: path.resolve('./src/templates/BlogPost.js'),
        context: {
          slug,
        },
      })
    }
  )
}
