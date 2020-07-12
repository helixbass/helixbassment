import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import {artNouveauFontStyles} from 'utils/typography'
import colors from 'utils/colors'
import {Global, css} from '@emotion/core'

import '../reset.css'

const HeaderBottomBorder = flowMax(addDisplayName('HeaderBottomBorder'), () => (
  <svg
    width="100%"
    height="30px"
    viewBox="0 -5 500 90"
    preserveAspectRatio="none"
    css={styles.headerBottomBorderSvg}
  >
    <path
      d="M249.6,43.2c2.9,15.7-2.2,30.5-9.8,39.2c-17.8,20.3-48.7,19.3-58,18.8c-66.7-3.2-91.5-64.7-147.1-58.8 C20.1,43.9,8.8,49.5,2.8,53c2.7-13.7,2.4-27.6,5.1-41.3c5.7,9.4,19.1,9.3,30.1,8C89.5,13.8,140.9,7.9,192.4,2 c13.5,4.2,27.1,8.4,40.6,12.6C236.4,17.5,246.7,27.1,249.6,43.2z"
      css={styles.headerBottomBorderFill}
      transform="translate(0, -24)"
    />
    <path
      d="M1,26.7c6-3.5,17.2-9.1,31.9-10.6c55.7-5.9,80.4,55.6,147.1,58.8c9.3,0.5,40.2,1.5,58-18.8 c2.1-2.4,19-22.2,9.8-39.2C241,4.3,222-2.6,207.8,5.5c-12.7,7.2-19.9,25.2-12.3,36.8c6.8,10.2,21.6,9.9,22.9,9.8"
      css={styles.headerBottomBorderPath}
    />
    <path
      d="M249.6,43.2c2.9,15.7-2.2,30.5-9.8,39.2c-17.8,20.3-48.7,19.3-58,18.8c-66.7-3.2-91.5-64.7-147.1-58.8 C20.1,43.9,8.8,49.5,2.8,53c2.7-13.7,2.4-27.6,5.1-41.3c5.7,9.4,19.1,9.3,30.1,8C89.5,13.8,140.9,7.9,192.4,2 c13.5,4.2,27.1,8.4,40.6,12.6C236.4,17.5,246.7,27.1,249.6,43.2z"
      css={styles.headerBottomBorderFill}
      transform="scale(-1, 1) translate(0, -24)"
      transform-origin="250 0"
    />
    <path
      d="M1,26.7c6-3.5,17.2-9.1,31.9-10.6c55.7-5.9,80.4,55.6,147.1,58.8c9.3,0.5,40.2,1.5,58-18.8 c2.1-2.4,19-22.2,9.8-39.2C241,4.3,222-2.6,207.8,5.5c-12.7,7.2-19.9,25.2-12.3,36.8c6.8,10.2,21.6,9.9,22.9,9.8"
      css={styles.headerBottomBorderPath}
      transform="scale(-1, 1)"
      transform-origin="250 0"
    />
  </svg>
))

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
      <h1 css={styles.header}>
        Helixbassment
        <HeaderBottomBorder />
      </h1>
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
    paddingTop: 30,
  },
  headerBottomBorderSvg: {
    position: 'absolute',
    bottom: -23,
  },
  headerBottomBorderPath: {
    fill: 'none',
    stroke: colors.black,
    strokeWidth: 8,
  },
  headerBottomBorderFill: {
    fill: colors.green,
  },
}
