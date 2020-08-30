import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import colors from 'utils/colors'
import {Global, css} from '@emotion/core'
import colorUtil from 'color'

import '../reset.css'
import Header, {HEADER_HEIGHT} from 'components/Header'
import {bodyFontFamily, headingFontFamily} from 'utils/typography'
import Footer from 'components/Footer'

const INNER_PADDING = '0.5rem'

const Layout = flowMax(addDisplayName('Layout'), ({children}) => (
  <>
    <Global
      styles={css`
        html {
          background-color: ${colors.green};
          color: ${colors.black};
          font-family: ${bodyFontFamily}, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${headingFontFamily}, sans-serif;
          font-weight: 700;
          text-transform: uppercase;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 1.7rem;
          padding-bottom: 2.05rem;
          border-bottom: 3px solid ${colors.green};
        }
        h3 {
          margin-bottom: 1.7rem;
          border-bottom: 2px solid ${colors.black};
          padding-left: ${INNER_PADDING};
          padding-right: ${INNER_PADDING};
          padding-bottom: 0.4rem;
          margin-left: -${INNER_PADDING};
          margin-right: -${INNER_PADDING};
          font-size: 1.48rem;
          padding-top: 1.75rem;
        }
        h4 {
          font-size: 1.325rem;
          padding-top: 1rem;
          margin-bottom: 1.825rem;
        }
        p {
          font-size: 1.125rem;
          line-height: 1.4375rem;
          margin-bottom: 1.3125rem;
          max-width: 38rem;
        }
        pre,
        code {
          font-family: monospace;
        }
        pre {
          overflow-x: auto;
          padding-top: 0.9rem;
          padding-bottom: 0.5rem;
          padding-left: ${INNER_PADDING};
          padding-right: ${INNER_PADDING};
          margin-left: -${INNER_PADDING};
          margin-right: -${INNER_PADDING};
          margin-top: -0.25rem;
          margin-bottom: 1.8rem;
          background-color: ${colorUtil('#d0e7fc')
            .lighten(0.08)
            .saturate(100)
            .string()};
        }
        code {
          background-color: ${colorUtil(colors.white)
            .darken(0.05)
            .desaturate(0.5)
            .string()};
        }
        pre code {
          background-color: transparent;
        }
        a,
        a:active,
        a:visited {
          color: ${colorUtil(colors.green).darken(0.2).string()};
        }
        em {
          font-style: italic;
        }
        ol {
          list-style: decimal;
          margin-left: 1.125rem;
        }
        li {
          font-size: 1.125rem;
          line-height: 1.4375rem;
          max-width: 38rem;
        }
        ol li {
          margin-bottom: 2rem;
        }
      `}
    />
    <div>
      <Header />
      <div css={styles.pageContainer}>
        <div css={styles.pageInnerContainer}>{children}</div>
        <Footer />
      </div>
    </div>
  </>
))

export default Layout

const styles = {
  pageContainer: {
    paddingTop: HEADER_HEIGHT,
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pageInnerContainer: {
    width: '100%',
    maxWidth: 1200,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    borderColor: colors.black,
    borderWidth: 4,
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    backgroundColor: colors.white,
    paddingTop: '6rem',
    paddingLeft: INNER_PADDING,
    paddingRight: INNER_PADDING,
  },
}
