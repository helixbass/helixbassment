import React from 'react'
import {flowMax, addDisplayName} from 'ad-hok'
import {artNouveauFontStyles} from 'utils/typography'
import colors from 'utils/colors'

const Home = flowMax(addDisplayName('Home'), () => (
  <div css={styles.header}>Hello worldz!</div>
))

export default Home

const styles = {
  header: {
    ...artNouveauFontStyles,
    color: colors.white,
    backgroundColor: colors.green,
  },
}
