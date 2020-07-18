import {addProps, flowMax} from 'ad-hok'
import {useStaticQuery, graphql} from 'gatsby'

const addSiteMetadata = flowMax(
  addProps(() =>
    useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
  ),
  addProps(({site: {siteMetadata}}) => ({
    siteMetadata,
  }))
)

export default addSiteMetadata
