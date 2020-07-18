import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import colors from 'utils/colors'
import {Global, css} from '@emotion/core'

import '../reset.css'
import Header, {HEADER_HEIGHT} from 'components/Header'
import {bodyFontFamily} from 'utils/typography'

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
      `}
    />
    <div>
      <Header />
      <div css={styles.pageContainer}>
        <div css={styles.pageInnerContainer}>{children}</div>
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
    flex: 1,
    borderColor: colors.black,
    borderWidth: 4,
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingLeft: 8,
    paddingRight: 8,
  },
}
