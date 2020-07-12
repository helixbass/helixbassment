import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import {artNouveauFontStyles} from 'utils/typography'
import colors from 'utils/colors'
import {Global, css} from '@emotion/core'

import '../reset.css'

const Layout = flowMax(addDisplayName('Layout'), ({children}) => (
  <>
    <Global
      styles={css`
        html {
          background-color: ${colors.green};
          color: ${colors.black};
        }
        * {
          box-sizing: border-box;
        }
      `}
    />
    <div>
      <h1 css={styles.header}>Helixbassment</h1>
      <div css={styles.pageContainer}>
        <div css={styles.pageInnerContainer}>{children}</div>
      </div>
    </div>
  </>
))

export default Layout

const HEADER_HEIGHT = 40
const styles = {
  header: {
    ...artNouveauFontStyles,
    color: colors.yellowishWhite,
    backgroundColor: colors.green,
    fontSize: 39,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
  },
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
    flex: 1,
    borderColor: colors.black,
    borderWidth: 4,
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    backgroundColor: colors.white,
  },
}
