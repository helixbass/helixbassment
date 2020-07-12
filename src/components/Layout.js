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
        }
      `}
    />
    <div>
      <h1 css={styles.header}>Helixbassment</h1>
      <div css={styles.page}>{children}</div>
    </div>
  </>
))

export default Layout

const HEADER_HEIGHT = 40
const styles = {
  header: {
    ...artNouveauFontStyles,
    color: colors.white,
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
  page: {
    marginTop: HEADER_HEIGHT,
  },
}
